/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

export function createBasicWindow(
	/** The window title */
	title: string,
	/** The window width (default: 400) */
	width: number = 400,
	/** The window height (default: 300) */
	height: number = 300,
	/** The layout for the main panel (default: java.awt.FlowLayout) */
	layout:
		| java.awt.FlowLayout
		| java.awt.BorderLayout = new java.awt.FlowLayout(),
	/** An array of buttons with labels and optional positions */
	buttons: { label: string; position?: string }[] = [],
	/** A function that runs when a button is clicked */
	callback?: (buttonLabel: string, button: javax.swing.JButton) => void,
): {
	frame: javax.swing.JFrame;
	panel: javax.swing.JPanel;
	buttons: Record<string, javax.swing.JButton>;
} {
	const frame = new javax.swing.JFrame(title);
	const panel = new javax.swing.JPanel(layout);
	const buttonMap: Record<string, javax.swing.JButton> = {};
	const mousePointer = java.awt.MouseInfo.getPointerInfo().getLocation();
	buttons.forEach(({ label, position }) => {
		const button = new javax.swing.JButton(label);
		if (callback) {
			button.addActionListener(() => callback(label, button));
		}
		if (layout instanceof java.awt.BorderLayout && position) {
			panel.add(button, position);
		} else {
			panel.add(button);
		}

		buttonMap[label] = button;
	});

	frame.add(panel);
	frame.setSize(width, height);
	frame.setVisible(true);
	frame.setLocation(
		mousePointer.getX() - width / 2,
		mousePointer.getY() - height / 2,
	);
	frame.setDefaultCloseOperation(
		javax.swing.WindowConstants.DO_NOTHING_ON_CLOSE,
	);
	frame.addWindowListener(
		new java.awt.event.WindowAdapter({
			windowClosing: () => {
				const response = javax.swing.JOptionPane.showConfirmDialog(
					frame,
					'Are you sure you want to close this window?',
					'Confirm Exit',
					javax.swing.JOptionPane.YES_NO_OPTION,
					javax.swing.JOptionPane.WARNING_MESSAGE,
				);
				if (response === javax.swing.JOptionPane.YES_OPTION) {
					frame.dispose();
					bot.terminate();
				}
			},
		}),
	);
	return { frame, panel, buttons: buttonMap };
}

export function createTextFieldWithLabel(
	/** The text to display on the label. */
	labelText: string,
	/** The internal variable name used to store the value. */
	variableName: string,
	/** The type of the variable ('string' or 'int'). */
	type: 'string' | 'int',
	/** The number of columns for the text field (default is 20). */
	textFieldWidth: number = 20,
	/** Text color for the label. */
	labelColor?: java.awt.Color,
	/** Text color for the text field. */
	textFieldColor?: java.awt.Color,
): { panel: javax.swing.JPanel; textField: javax.swing.JTextField } {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);
	const label: javax.swing.JLabel = new javax.swing.JLabel(labelText);
	label.setAlignmentX(javax.swing.JComponent.LEFT_ALIGNMENT);
	// Retrieve the cached value or set a default based on type
	const cachedValue: string | number =
		type === 'string'
			? bot.bmCache.getString(variableName, '')
			: bot.bmCache.getInt(variableName, 0);
	const textField: javax.swing.JTextField = new javax.swing.JTextField(
		String(cachedValue),
		textFieldWidth,
	);
	if (textFieldColor) {
		panel.setForeground(textFieldColor);
		textField.setBackground(textFieldColor);
	}
	if (labelColor) {
		label.setForeground(labelColor);
		textField.setForeground(labelColor);
		textField.setBorder(
			javax.swing.BorderFactory.createCompoundBorder(
				javax.swing.BorderFactory.createLineBorder(labelColor, 1),
				javax.swing.BorderFactory.createEmptyBorder(5, 5, 5, 5),
			),
		);
	}
	textField.addFocusListener(
		new java.awt.event.FocusListener({
			focusLost: () => {
				const enteredText = textField.getText().trim();
				if (type.includes('string')) {
					bot.bmCache.saveString(variableName, enteredText);
				} else if (type.includes('int')) {
					bot.bmCache.saveInt(variableName, Number(enteredText));
				}
			},
		}),
	);

	panel.add(label, java.awt.BorderLayout.WEST);
	panel.add(textField, java.awt.BorderLayout.CENTER);
	return { panel, textField };
}

/** @param checkboxLabel: The text to display on the label
 * @param checkboxVariableName: The internal variable name for the checkbox state. This is saved to the bmCache
 * @param defaultChecked: Default state of the checkbox (default: false)
 * @param selectedTextColor: Text Color
 * @param unselectedTextColor: Unselected Text Color
 * @param tooltip: Tooltip text
 * @returns { panel: javax.swing.JPanel; checkbox: javax.swing.JCheckBox }
 */
export function createCheckboxLabel(
	/** The text to display on the label */
	checkboxLabel: string,
	/** The internal variable name for the checkbox state */
	checkboxVariableName: string,
	/** Default state of the checkbox (default: false) */
	defaultChecked: boolean = false,
	/** Text Color */
	selectedTextColor?: java.awt.Color,
	tooltip?: string,
) {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);

	const isChecked: boolean = bot.bmCache.getBoolean(
		checkboxVariableName,
		defaultChecked,
	);
	const checkbox: javax.swing.JCheckBox = new javax.swing.JCheckBox(
		checkboxLabel,
		isChecked,
	);
	if (selectedTextColor) {
		checkbox.setForeground(
			isChecked ? selectedTextColor.brighter() : selectedTextColor,
		);
	}
	checkbox.addActionListener(() => {
		const selected: boolean = checkbox.isSelected();
		bot.bmCache.saveBoolean(checkboxVariableName, selected);
		if (selectedTextColor) {
			if (selected) {
				checkbox.setForeground(selectedTextColor.brighter());
			} else {
				checkbox.setForeground(selectedTextColor);
			}
		}
	});
	if (tooltip) {
		checkbox.setToolTipText(tooltip);
	}
	panel.add(checkbox);
	return { panel, checkbox };
}

/**
 * @param title: The text to display on the label
 * @param font: The font to use for the label (default: SansSerif, plain, 12)
 * @param color: The color to use for the label (default: BLACK)
 * @returns { panel: javax.swing.JPanel; label: javax.swing.JLabel }
 */
export function createLabel(
	title: string,
	font: java.awt.Font = new java.awt.Font(
		'SansSerif',
		java.awt.Font.PLAIN,
		12,
	),
	color: java.awt.Color = java.awt.Color.BLACK,
): { panel: javax.swing.JPanel; label: javax.swing.JLabel } {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);
	const label = new javax.swing.JLabel(title);
	label.setFont(font);
	label.setForeground(color);
	panel.add(label);
	return { panel, label };
}

/**
 * @param buttonText: The text to display on the button
 * @param onClick: A function that runs when the button is clicked
 * @param backgroundColor: Background color for the button
 * @param foregroundColor: Foreground (text) color for the button
 * @param tooltip: Tooltip text
 * @param enabled: Whether the button is enabled (default: true)
 * @returns { panel: javax.swing.JPanel; button: javax.swing.JButton }
 */
export function createButton(
	/** The text to display on the button */
	buttonText: string,
	/** A function that runs when the button is clicked */
	onClick: () => void,
	/** Background color for the button */
	backgroundColor?: java.awt.Color,
	/** Foreground (text) color for the button */
	foregroundColor?: java.awt.Color,
	/** Tooltip text */
	tooltip?: string,
	/** Whether the button is enabled (default: true) */
	enabled: boolean = true,
): { panel: javax.swing.JPanel; button: javax.swing.JButton } {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);
	const button: javax.swing.JButton = new javax.swing.JButton(buttonText);
	button.addActionListener(() => {
		onClick();
		bot.printGameMessage('Button clicked');
	});
	if (backgroundColor) {
		button.setBackground(backgroundColor);
	}
	if (foregroundColor) {
		button.setForeground(foregroundColor);
	}
	if (tooltip) {
		button.setToolTipText(tooltip);
	}
	button.setEnabled(enabled);
	panel.add(button);
	return { panel, button };
}

/**
 *
 * @param labelText: The text to display on the label
 * @param variableName: The internal variable name used to store the selected value
 * @param options: Array of options to display in the dropdown
 * @param defaultIndex: Default selected option index (default: 0)
 * @param tooltip: Tooltip text
 * @returns { panel: javax.swing.JPanel; comboBox: javax.swing.JComboBox }
 */
export function createDropdown(
	/** The text to display on the label */
	labelText: string,
	/** The internal variable name used to store the selected value */
	variableName: string,
	/** Array of options to display in the dropdown */
	options: string[],
	/** Default selected option */
	defaultOption: string,
	/** Text Color */
	textColor?: java.awt.Color,
): { panel: javax.swing.JPanel; comboBox: javax.swing.JComboBox } {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);

	const label: javax.swing.JLabel = new javax.swing.JLabel(labelText);
	if (textColor) {
		label.setForeground(textColor);
	}
	fixHeight(label);

	panel.add(label, java.awt.BorderLayout.WEST);
	const cachedValue: string = bot.bmCache.getString(
		variableName,
		defaultOption,
	);
	const comboBox: javax.swing.JComboBox = new javax.swing.JComboBox(options);
	comboBox.setSelectedItem(cachedValue);
	if (textColor) {
		comboBox.setForeground(textColor);
	}
	comboBox.addActionListener(() => {
		const selected = comboBox.getSelectedItem();
		bot.bmCache.saveString(variableName, selected);
	});
	fixHeight(comboBox);
	panel.add(comboBox, java.awt.BorderLayout.CENTER);
	return { panel, comboBox };
}

/**
 * @param radioLabel: The text to display on the radio button
 * @param variableName: The internal variable name for the radio button state
 * @param value: The value this radio button represents
 * @param buttonGroup: The button group to add this radio to (optional)
 * @param defaultSelected: Default state of the radio button (default: false)
 * @param textColor: Text Color
 * @param tooltip: Tooltip text
 * @returns { panel: javax.swing.JPanel; radioButton: any }
 */
export function createRadioButtons(
	/** The text to display on the radio button */
	radioLabels: string[],
	/** The internal variable name for the radio button state */
	variableName: string,
	/** Text Color */
	textColor?: java.awt.Color,
): { panel: javax.swing.JPanel } {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.FlowLayout(java.awt.FlowLayout.LEFT, 5, 0),
	);

	const cachedValue: string = bot.bmCache.getString(variableName, '');
	const radioButtonGroup = new javax.swing.ButtonGroup();
	for (const radioLabel of radioLabels) {
		const isSelected: boolean =
			JSON.stringify(cachedValue).toLocaleLowerCase().normalize() ===
			JSON.stringify(radioLabel).toLocaleLowerCase().normalize();

		const radioButton = new javax.swing.JRadioButton(
			radioLabel,
			isSelected,
		);
		radioButtonGroup.add(radioButton);
		if (textColor) {
			radioButton.setForeground(textColor);
		}
		radioButton.addActionListener(() => {
			bot.bmCache.saveString(variableName, radioLabel);
		});
		panel.add(radioButton);
	}
	return { panel };
}

/**
 * @param labelText: The text to display on the label
 * @param variableName: The internal variable name used to store the value
 * @param rows: Number of rows (default: 5)
 * @param columns: Number of columns (default: 30)
 * @param editable: Whether the text area is editable (default: true)
 * @param lineWrap: Whether to show line wrap (default: true)
 * @param wrapStyleWord: Whether to wrap at word boundaries (default: true)
 * @param tooltip: Tooltip text
 * @returns { panel: javax.swing.JPanel; textArea: javax.swing.JTextArea; scrollPane: javax.swing.JScrollPane }
 */
export function createTextArea(
	/** The text to display on the label */
	labelText: string,
	/** The internal variable name used to store the value */
	variableName: string,
	/** Number of rows (default: 5) */
	rows: number = 5,
	/** Number of columns (default: 30) */
	columns: number = 30,
	/** Whether the text area is editable (default: true) */
	editable: boolean = true,
	/** Whether to show line wrap (default: true) */
	lineWrap: boolean = true,
	/** Whether to wrap at word boundaries (default: true) */
	wrapStyleWord: boolean = true,
	/** Tooltip text */
	tooltip?: string,
): {
	panel: javax.swing.JPanel;
	textArea: javax.swing.JTextArea;
	scrollPane: javax.swing.JScrollPane;
} {
	const panel: javax.swing.JPanel = new javax.swing.JPanel(
		new java.awt.BorderLayout(),
	);

	const label: javax.swing.JLabel = new javax.swing.JLabel(labelText);
	fixHeight(label);
	panel.add(label, java.awt.BorderLayout.NORTH);

	const cachedValue: string = bot.bmCache.getString(variableName, '');
	const textArea: javax.swing.JTextArea = new javax.swing.JTextArea(
		cachedValue,
		rows,
		columns,
	);
	textArea.setEditable(editable);
	textArea.setLineWrap(lineWrap);
	textArea.setWrapStyleWord(wrapStyleWord);

	if (tooltip) {
		(textArea as any).setToolTipText(tooltip);
	}

	textArea.addFocusListener(
		new java.awt.event.FocusListener({
			focusLost: () => {
				const text = textArea.getText();
				bot.bmCache.saveString(variableName, text);
			},
		}),
	);

	const scrollPane: javax.swing.JScrollPane = new javax.swing.JScrollPane(
		textArea,
	);
	scrollPane.setVerticalScrollBarPolicy(
		javax.swing.ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED,
	);
	scrollPane.setHorizontalScrollBarPolicy(
		javax.swing.ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED,
	);

	panel.add(scrollPane, java.awt.BorderLayout.CENTER);
	return { panel, textArea, scrollPane };
}

export function createPanel(
	layout:
		| 'FlowLayout'
		| 'BorderLayout'
		| 'BoxLayout'
		| 'GridLayout' = 'FlowLayout', // User can specify layout manager (e.g., FlowLayout or BorderLayout or BoxLayout)
	layoutOptions?: {
		flowLayout?: {
			horizontalGap?: number;
			verticalGap?: number;
		};
		borderLayout?: {
			hgap: number;
			vgap: number;
		};
		boxLayout?: {
			axis: number;
		};
		gridLayout?: {
			rows: number;
			columns: number;
		};
	},
	padding?: { top: number; left: number; bottom: number; right: number }, // Padding for the panel
	border?: javax.swing.Border,
): javax.swing.JPanel {
	const panel: javax.swing.JPanel = new javax.swing.JPanel();
	// Set the layout for the panel (default to FlowLayout if not provided)
	switch (layout) {
		case 'FlowLayout': {
			if (layoutOptions?.flowLayout) {
				panel.setLayout(
					new java.awt.FlowLayout(
						layoutOptions.flowLayout.horizontalGap ?? 0,
						layoutOptions.flowLayout.verticalGap ?? 0,
					),
				);
			} else {
				panel.setLayout(new java.awt.FlowLayout());
			}
			break;
		}
		case 'BorderLayout': {
			if (layoutOptions?.borderLayout) {
				panel.setLayout(
					new java.awt.BorderLayout(
						layoutOptions.borderLayout.hgap ?? 0,
						layoutOptions.borderLayout.vgap ?? 0,
					),
				);
			} else {
				panel.setLayout(new java.awt.BorderLayout());
			}
			break;
		}
		case 'BoxLayout': {
			if (layoutOptions?.boxLayout) {
				panel.setLayout(
					new javax.swing.BoxLayout(
						panel,
						layoutOptions.boxLayout.axis,
					),
				);
			} else {
				panel.setLayout(
					new javax.swing.BoxLayout(
						panel,
						1, // Y_AXIS = 1
					),
				);
			}
			break;
		}
		case 'GridLayout': {
			if (layoutOptions?.gridLayout) {
				panel.setLayout(
					new java.awt.GridLayout(
						layoutOptions.gridLayout?.rows ?? 0,
						layoutOptions.gridLayout?.columns ?? 0,
					),
				);
				break;
			} else {
				panel.setLayout(new java.awt.GridLayout(0, 0));
			}
			break;
		}
		default: {
			panel.setLayout(new java.awt.FlowLayout());
			break;
		}
	}

	// Set padding (empty border) if provided
	if (padding) {
		panel.setBorder(
			javax.swing.BorderFactory.createEmptyBorder(
				padding.top,
				padding.left,
				padding.bottom,
				padding.right,
			),
		);
	} else {
		panel.setBorder(
			javax.swing.BorderFactory.createEmptyBorder(5, 5, 5, 5),
		); // Default padding
	}

	// Set a custom border if provided
	if (border) {
		panel.setBorder(border);
	}

	return panel;
}

export function createSplitPane(
	firstComponent: javax.swing.JComponent,
	secondComponent: javax.swing.JComponent,
	orientation: 'horizontal' | 'vertical' = 'horizontal',
): javax.swing.JSplitPane {
	const splitPane = new javax.swing.JSplitPane(
		orientation === 'horizontal'
			? javax.swing.JSplitPane.HORIZONTAL_SPLIT
			: javax.swing.JSplitPane.VERTICAL_SPLIT,
	);
	splitPane.setLeftComponent(firstComponent);
	splitPane.setRightComponent(secondComponent);
	splitPane.setResizeWeight(0.5);
	splitPane.setBorder(null);
	splitPane.setOneTouchExpandable(true);
	splitPane.setContinuousLayout(true);
	splitPane.setDividerLocation(0.5);
	return splitPane;
}

export function fixHeight(c: javax.swing.Component) {
	const pref = c.getPreferredSize();
	c.setMaximumSize(
		new java.awt.Dimension(java.lang.Integer.MAX_VALUE, pref.height),
	);
}
