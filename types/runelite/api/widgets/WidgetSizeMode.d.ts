declare namespace net.runelite.api {
	class WidgetSizeMode {
		/**
		 * dim = originalDim
		 */
		static readonly ABSOLUTE = 0;

		/**
		 * dim = parentDim - originalDim
		 */
		static readonly MINUS = 1;

		/**
		 * dim = parentDim * (originalDim / 16384)
		 */
		static readonly ABSOLUTE_16384THS = 2;
	}
}
