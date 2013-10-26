/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'jqm\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ui-icon-plus' : '&#xf067;',
			'ui-icon-minus' : '&#xf068;',
			'ui-icon-remove' : '&#xf00d;',
			'ui-icon-chevron-left' : '&#xf053;',
			'ui-icon-chevron-right' : '&#xf054;',
			'ui-icon-chevron-up' : '&#xf077;',
			'ui-icon-chevron-down' : '&#xf078;',
			'ui-icon-ok' : '&#xf00c;',
			'ui-icon-cog' : '&#xf013;',
			'ui-icon-repeat' : '&#xf01e;',
			'ui-icon-share-alt' : '&#xf064;',
			'ui-icon-warning' : '&#xe000;',
			'ui-icon-home' : '&#xf015;',
			'ui-icon-search' : '&#xf002;',
			'ui-icon-star' : '&#xf005;',
			'ui-icon-th' : '&#xf00a;',
			'ui-icon-pencil' : '&#xf040;',
			'ui-icon-tasks' : '&#xf0ae;',
			'ui-icon-back' : '&#xe001;',
			'ui-icon-info' : '&#xe002;',
			'ui-icon-circle' : '&#xf111;',
			'ui-icon-circle-blank' : '&#xf10c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/ui-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};