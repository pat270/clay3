function localStorageAvailable() {
	var lsTest = 'lsTest';
	try {
		localStorage.setItem(lsTest, lsTest);
		localStorage.removeItem(lsTest);
		return true;
	}
	catch(e) {
		return false;
	}
}

var clayVersions = [
	'Select Version',
	'clay-table-dd',
	'3.25.0',
	'3.18.1',
	'3.16.0',
	'3.13.0',
	'3.10.0',
	'3.8.0',
	'3.4.0',
];

var portalClayVersions = {
	'3.18.1': '(7.3.6 GA6)',
	'3.16.0': '(7.3.4 GA5)',
	'3.13.0': '(7.3.3 GA4)',
	'3.10.0': '(7.3.2 GA3)',
	'3.8.0': '(7.3.1 GA2)',
	'3.4.0': '(7.3.0 GA1)',
};

document.addEventListener('DOMContentLoaded', function(event) {
	var clayVersionList = document.getElementById('clayVersionList');

	for (var i = 0; i < clayVersions.length; i++) {
		var optionEl = document.createElement('option');
		var optionElText = document.createTextNode(clayVersions[i]);
		var additionalText = '';

		optionEl.setAttribute('data-version', clayVersions[i]);

		if (portalClayVersions[clayVersions[i]]) {
			additionalText = ' ' + portalClayVersions[clayVersions[i]];
		}

		optionElText.nodeValue = clayVersions[i] + additionalText;

		optionEl.appendChild(optionElText);
		clayVersionList.appendChild(optionEl);
	}

	clayVersionList.addEventListener('change', function(event) {
		var version = this.options[this.options.selectedIndex].getAttribute('data-version');

		if (localStorageAvailable()) {
			localStorage.setItem('nate.lexiconHref', window.location.origin + '/clay3-test-site/v' + version + '/css/site/site-atlas-font-awesome.css');
		}

		window.location.href = './v' + version;
	});
});