plugin.loadLang();

plugin.loadCSS("linkemby");

plugin.onLangLoaded = function()
{
    this.addButtonToToolbar("linkemby", theUILang.linkplex, plugin.optionlink+"('" + plugin.url + "')", "help");
    this.addSeparatorToToolbar("help");
}

plugin.onRemove = function()
{
    this.removeSeparatorFromToolbar("linkemby");
    this.removeButtonFromToolbar("linkemby");
}
