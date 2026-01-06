/* eslint-disable unicorn/number-literal-case */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-return */

import { globalScriptVariables } from '../global-script-variables/global-script-variables.js';
import {
	createBasicWindow,
	createTextFieldWithLabel,
	createCheckboxLabel,
	createLabel,
	createButton,
	createPanel,
	createDropdown,
	createRadioButtons,
	createTextArea,
	createSplitPane,
} from './helper-functions.js';
import { SWING_UI_SUMMARY } from './panel-faq.js';

// Define color scheme - using a base color that we'll create variations from
const COLOR_SCHEME = {
	BACKGROUND: new java.awt.Color(0x1b1b1b),
	PANEL: new java.awt.Color(0x282828),
	ACCENT: new java.awt.Color(0xdc8a00),
	TEXT: new java.awt.Color(0xffffff),
};

/**
 * Creates a comprehensive UI showcasing all helper functions
 */
export const createUi = (): any => {
	// Create main window using createBasicWindow
	const { frame, panel } = createBasicWindow(
		'Helper Functions Showcase',
		800,
		700,
		new java.awt.BorderLayout(),
	);

	// Set background color
	panel.setBackground(COLOR_SCHEME.BACKGROUND);

	const tabbedPanel = new javax.swing.JTabbedPane();
	tabbedPanel.setTabPlacement(javax.swing.JTabbedPane.TOP);
	tabbedPanel.setBackground(COLOR_SCHEME.BACKGROUND);
	tabbedPanel.setForeground(COLOR_SCHEME.TEXT);

	const examplePanel = createExamplePanel();
	tabbedPanel.addTab('Example Panel', examplePanel);

	// Create main scrollable panel
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const jListPanel = createPanel(
		'BorderLayout',
		{ borderLayout: { hgap: 15, vgap: 15 } },
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('JList Examples'),
	);
	const temporaryList = new javax.swing.JList(['Test', 'Test 2', 'Test 3']);
	const temporaryScrollPane = new javax.swing.JScrollPane(temporaryList);
	jListPanel.add(temporaryScrollPane, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('JList Examples', jListPanel);
	// Add scroll pane to main panel

	const textFieldPanel = createPanel(
		'BorderLayout',
		{ borderLayout: { hgap: 15, vgap: 15 } },
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Text Field Examples'),
	);
	const temporaryTextField = createTextFieldWithLabel(
		'Test',
		'test',
		'int',
		10,
		COLOR_SCHEME.ACCENT,
		COLOR_SCHEME.BACKGROUND,
	);
	textFieldPanel.add(temporaryTextField.panel, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('Text Field Examples', textFieldPanel);

	const checkboxLabelPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Checkbox Label Examples'),
	);
	const temporaryCheckboxLabel = createCheckboxLabel(
		'Test',
		'test',
		true,
		COLOR_SCHEME.TEXT,
		'Test tooltip',
	);
	checkboxLabelPanel.add(
		temporaryCheckboxLabel.panel,
		java.awt.BorderLayout.CENTER,
	);
	tabbedPanel.addTab('Checkbox Label Examples', checkboxLabelPanel);

	const labelPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Label Examples'),
	);
	const temporaryLabel = createLabel('Test');
	labelPanel.add(temporaryLabel.panel, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('Label Examples', labelPanel);

	const buttonPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Button Examples'),
	);
	const button = createButton(
		'Test',
		() => {
			bot.printGameMessage('Button clicked');
		},
		COLOR_SCHEME.ACCENT,
		COLOR_SCHEME.TEXT,
		'Test tooltip',
		true,
	);
	buttonPanel.add(button.panel, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('Button Examples', buttonPanel);

	const dropdownPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Dropdown Examples'),
	);
	const temporaryDropdown = createDropdown(
		'Test',
		'test',
		['Test', 'Test 2', 'Test 3'],
		'Test',
		COLOR_SCHEME.TEXT,
	);
	dropdownPanel.add(temporaryDropdown.panel, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('Dropdown Examples', dropdownPanel);

	const radioButtonPanel = createPanel(
		'BoxLayout',
		{ boxLayout: { axis: javax.swing.BoxLayout.Y_AXIS } },
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Radio Button Examples'),
	);
	const temporaryRadioButtons = createRadioButtons(
		['Test Radio Button A', 'Test Radio Button B', 'Test Radio Button C'],
		'radioGroupTest',
		COLOR_SCHEME.TEXT,
	);
	radioButtonPanel.add(
		temporaryRadioButtons.panel,
		java.awt.BorderLayout.CENTER,
	);
	tabbedPanel.addTab('Radio Button Examples', radioButtonPanel);

	/* Create Text Area Examples */
	const textAreaPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Text Area Examples'),
	);
	const temporaryTextArea = createTextArea(
		'Test Title',
		'testVariable',
		10,
		30,
		true,
		false,
		true,
		'Test tooltip',
	);
	textAreaPanel.add(temporaryTextArea.panel, java.awt.BorderLayout.CENTER);
	tabbedPanel.addTab('Text Area Examples', textAreaPanel);

	panel.add(tabbedPanel, java.awt.BorderLayout.CENTER);
	panel.revalidate();
	panel.repaint();
	return frame;
};

/**
 * Creates a example panel with a title and a border bringing all previous components of other panels together, to design a workable / usable UI.
 * @returns { panel: javax.swing.JPanel }
 */
export const createExamplePanel = (): javax.swing.JPanel => {
	//This is the main panel that gets returned. Everything else is added to this panel.
	const examplePanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder(
			'Example Panel with all components',
		),
	);
	examplePanel.setBackground(COLOR_SCHEME.BACKGROUND);
	examplePanel.setForeground(COLOR_SCHEME.TEXT);

	// Creating a panel that will reside on the left of the split pane

	const mainScriptSettingsPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Script Settings'),
	);
	mainScriptSettingsPanel.setBackground(COLOR_SCHEME.BACKGROUND);
	mainScriptSettingsPanel.setForeground(COLOR_SCHEME.TEXT);

	// Creating a panel that will reside within the left panel, and will contain the example script settings. (This will be aligned NORTH)
	const exampleScriptSettingsPanelNorth = createPanel(
		'GridLayout',
		{ gridLayout: { rows: 0, columns: 1 } },
		undefined,
		javax.swing.BorderFactory.createTitledBorder(
			'Example Script Settings (North)',
		),
	);
	exampleScriptSettingsPanelNorth.setBackground(COLOR_SCHEME.BACKGROUND);
	exampleScriptSettingsPanelNorth.setForeground(COLOR_SCHEME.TEXT);
	//Create a text field to hold a bank pin. You can either store it as a string or an int, depending on how you may parse the value. I store it as an int.
	const exampleBankPinTextField = createTextFieldWithLabel(
		'Bank Pin: ',
		'bankPinCachedVariable',
		'string',
		10,
		COLOR_SCHEME.ACCENT,
		COLOR_SCHEME.BACKGROUND,
	).panel;

	exampleScriptSettingsPanelNorth.add(exampleBankPinTextField);

	const exampleEnableBankingCheckbox = createCheckboxLabel(
		'Enable Banking',
		'enableBankingCachedVariable',
		false,
		COLOR_SCHEME.ACCENT,
		'Test tooltip',
	).panel;

	const exampleScriptSettingsComboBox = createDropdown(
		'Script Settings',
		'scriptSettingsCachedVariable',
		['Test', 'Test 2', 'Test 3'],
		'Test',
		COLOR_SCHEME.ACCENT,
	).panel;
	exampleScriptSettingsPanelNorth.add(exampleScriptSettingsComboBox);
	exampleScriptSettingsPanelNorth.add(exampleEnableBankingCheckbox);

	mainScriptSettingsPanel.add(
		exampleScriptSettingsPanelNorth,
		java.awt.BorderLayout.NORTH,
	);

	//Creating a panel that will reside within the left panel, and will contain the script start button. (This will be aligned CENTER)
	const scriptStartPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Script Start'),
	);
	scriptStartPanel.setBackground(COLOR_SCHEME.BACKGROUND);
	scriptStartPanel.setForeground(COLOR_SCHEME.TEXT);

	const startButton = createButton(
		'Start',
		() => {
			bot.printGameMessage(
				`If this was not an example, this would dispose the frame and begin the script execution.`,
			);
			globalScriptVariables.uiCompleted = true;
		},
		COLOR_SCHEME.ACCENT,
		COLOR_SCHEME.TEXT,
		'Test tooltip',
		true,
	).panel;
	scriptStartPanel.add(startButton, java.awt.BorderLayout.CENTER);

	mainScriptSettingsPanel.add(scriptStartPanel, java.awt.BorderLayout.CENTER);

	// Creating a panel that will reside on the right of the split pane

	// Panel Summary Panel
	const panelSummaryPanel = createPanel(
		'BorderLayout',
		undefined,
		{ top: 15, left: 15, bottom: 15, right: 15 },
		javax.swing.BorderFactory.createTitledBorder('Panel Summary'),
	);
	panelSummaryPanel.setBackground(COLOR_SCHEME.BACKGROUND);
	panelSummaryPanel.setForeground(COLOR_SCHEME.TEXT);

	const panelSummaryTextArea = createTextArea(
		'',
		'panelSummaryCachedVariable',
		undefined,
		undefined,
		false,
		true,
		true,
	);
	panelSummaryTextArea.textArea.setText(SWING_UI_SUMMARY);
	panelSummaryTextArea.textArea.setBackground(COLOR_SCHEME.BACKGROUND);
	panelSummaryTextArea.textArea.setForeground(COLOR_SCHEME.TEXT);
	panelSummaryTextArea.textArea.setFont(
		new java.awt.Font('Monospaced', java.awt.Font.PLAIN, 12),
	);
	panelSummaryTextArea.textArea.setBorder(
		javax.swing.BorderFactory.createCompoundBorder(
			javax.swing.BorderFactory.createLineBorder(COLOR_SCHEME.ACCENT, 1),
			javax.swing.BorderFactory.createEmptyBorder(10, 10, 10, 10),
		),
	);

	panelSummaryTextArea.textArea.setOpaque(false);
	panelSummaryTextArea.textArea.setOpaque(false);
	panelSummaryPanel.add(
		panelSummaryTextArea.panel,
		java.awt.BorderLayout.CENTER,
	);

	const splitPane = createSplitPane(
		mainScriptSettingsPanel as unknown as javax.swing.JComponent, // the type casting i can't be fucked fixing right now
		panelSummaryPanel as unknown as javax.swing.JComponent, // the type casting i can't be fucked fixing right now
	);
	examplePanel.add(splitPane, java.awt.BorderLayout.CENTER);
	// examplePanel.add(exampleScriptSettingsPanel, java.awt.BorderLayout.CENTER);
	return examplePanel;
};
