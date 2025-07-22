const layoutStyles = {
  appBackground: "min-h-screen bg-gradient-to-br from-orange-50 to-red-50",
  centeredContent: "flex items-center justify-center",
  statusText: "text-xl font-medium",
};

export const appStyles = {
  main: layoutStyles.appBackground,
  loadingContainer: `${layoutStyles.appBackground} ${layoutStyles.centeredContent}`,
  loadingText: `${layoutStyles.statusText} text-gray-700`,
};

export const logoStyles = {
  container: "flex items-center space-x-1 md:space-x-2",
  icon: "h-12 w-12 md:h-14 md:w-14 text-orange-800",
  text: "text-lg md:text-2xl font-bold text-center md:text-left md:whitespace-nowrap",
};

export const buttonStyles = {
  primary:
    "bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-md font-medium transition-colors",
  secondary:
    "bg-gray-400 hover:bg-gray-500 text-white px-8 py-2 rounded-md font-medium transition-colors",
  danger:
    "bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md font-medium transition-colors",
  social:
    "w-full bg-white hover:bg-gray-100 disabled:bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 border border-gray-300 shadow-sm",
};

export const cardStyles = {
  recipe:
    "bg-white rounded-lg shadow-sm border border-orange-100 p-4 mb-4 hover:shadow-md transition-shadow",
  title: "text-xl font-semibold text-gray-800 mb-2",
  meta: "text-sm text-gray-600 flex items-center gap-2 mb-4",
  heading: "font-medium text-gray-700 mb-1 mt-4 first:mt-0",
  text: "text-gray-600 text-sm leading-relaxed",
};

export const badgeStyles = {
  base: "px-2 py-1 rounded text-xs",
  time: "bg-orange-100 text-orange-800",
  servings: "bg-blue-100 text-blue-800",
};

export const formStyles = {
  label: "block text-sm font-medium text-gray-700",
  input: "w-full mt-2",
};

export const loginPageStyles = {
  // Main Layout
  container:
    "min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-3 sm:p-4",
  card: "bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md",

  // Header Section
  header: "text-center mb-6 sm:mb-8",
  headerIconWrapper: "flex justify-center mb-3 sm:mb-4",
  headerIcon: "w-10 h-10 sm:w-12 sm:h-12 text-orange-500",
  title: "text-2xl sm:text-3xl font-bold text-gray-800 mb-2",
  subtitle: "text-sm sm:text-base text-gray-600",

  // Error Message
  errorBox: "bg-red-50 border border-red-200 rounded-lg p-3 mb-4 sm:mb-6",
  errorText: "text-red-700 text-sm",

  // Form & Inputs
  formContainer: "space-y-4 sm:space-y-6",
  label: "block text-sm font-medium text-gray-700 mb-2",
  inputWrapper: "relative",
  input:
    "w-full pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm md:text-base",
  inputWithButton:
    "w-full pl-10 pr-12 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm md:text-base",
  iconLeft:
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5",
  iconRight:
    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors w-4 h-4 md:w-5 md:h-5",

  // Buttons for the Login Page
  buttonPrimary:
    "w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base",
  buttonSocial:
    "w-full bg-white hover:bg-gray-100 disabled:bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 border border-gray-300 shadow-sm",
  spinner:
    "animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white",
  buttonIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Divider
  divider:
    "my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5",
  dividerText: "text-center font-semibold mx-4 mb-0 text-gray-500",

  // Footer & Toggle Link
  toggleContainer: "mt-4 sm:mt-6 text-center",
  toggleText: "text-sm sm:text-base text-gray-600",
  toggleLink:
    "ml-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors",
  footer: "mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500",
  footerText: "text-xs sm:text-sm text-gray-500",
};

export const headerStyles = {
  container:
    "flex items-center p-3 md:p-4 gap-3 md:gap-6 bg-orange-100 shadow-sm border-b border-orange-200",
  searchWrapper: "flex-grow",
  actionsWrapper: "flex items-center gap-2",

  icon: "mr-2 h-4 w-4",
};

export const iconStyles = {
  button: "w-4 h-4 mr-2 md:w-5 md:h-5",
};

export const recipeFormStyles = {
  container:
    "max-w-2xl mx-auto p-4 sm:p-6 mt-4 sm:mt-8 bg-white rounded-lg shadow-sm border border-orange-100",
  title: "text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6",
  form: "space-y-4 sm:space-y-6",
  row: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  ingredientsTextarea: "w-full h-28 sm:h-32 resize-none mt-2",
  instructionsTextarea: "w-full h-36 sm:h-40 resize-none mt-2",
  errorText: "text-sm text-red-600 text-center",
  buttonContainer: "flex justify-center gap-4 pt-4",
  loaderIcon: "mr-2 h-4 w-4 animate-spin",
};

export const recipeListStyles = {
  container: "max-w-4xl mx-auto p-4 sm:p-6",

  header: "text-center mb-6 sm:mb-8 md:mb-10",

  title:
    "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3",

  divider: "w-16 sm:w-20 md:w-28 h-1.5 bg-orange-400 mx-auto rounded-full",

  listWrapper: "space-y-4 sm:space-y-6",

  emptyStateContainer:
    "flex flex-col items-center justify-center min-h-[40vh] bg-gray-50/70 rounded-lg p-4 sm:p-8 text-center border border-dashed",

  emptyStateIcon: "w-12 h-12 sm:w-16 sm:h-16 text-orange-300 mb-4",

  emptyStateText: "text-lg sm:text-xl text-gray-600",

  statusContainer: `${layoutStyles.centeredContent} min-h-[40vh] text-center p-4`,

  statusIndicator: "flex flex-col items-center",

  statusIcon: "w-12 h-12 sm:w-16 sm:h-16 mb-4",

  loadingIcon: "text-orange-400 animate-spin",

  // statusText: "text-xl font-medium",
  loadingText: `${layoutStyles.statusText} text-lg sm:text-xl text-gray-700`,
  errorText: `${layoutStyles.statusText} text-lg sm:text-xl text-red-600`,
};
