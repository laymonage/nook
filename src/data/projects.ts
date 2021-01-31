const softwareProjects = [
	{
		id: 9,
		image: {
			src: '/img/projects/djth.png',
			class: [],
		},
		title: 'django-template-heroku',
		url: 'https://github.com/laymonage/django-template-heroku',
		description: `Simple Django project template ready for Heroku deployment
    with GitLab CI or GitHub Actions.`,
		details: {
			type: 'disc',
			children: [
				'Single `requirements.txt` file for simplicity.',
				'Project-wide and app-level static files and templates directories.',
				'Pre-configured unit tests and functional tests.',
				'100% code coverage on initial project spawn.',
				'Automatic testing, coverage checking, and deployment to Heroku.',
				'Includes GitLab CI and GitHub Actions configurations with caching support for `pip`.',
			],
		},
	},
	{
		id: 8,
		image: {
			src: '/img/projects/django-jsonfield-backport.svg',
			class: ['w-6/12', 'md:w-8/12', 'xl:w-7/12', 'rounded-full'],
		},
		title: 'django-jsonfield-backport',
		url: 'https://github.com/laymonage/django-jsonfield-backport',
		description: 'Backport of the cross-DB JSONField model and form fields from Django 3.1.',
		details: {
			type: 'disc',
			children: [
				'Brings a highly-anticipated feature of Django 3.1 into previous versions.',
				'Supports multiple versions of MariaDB, MySQL, Oracle Database, PostgreSQL, and SQLite.',
				'`isort` and `flake8`-compliant with `black` code style and 100% code coverage.',
				'Automated testing on 29 different system environments with Django 2.2, 3.0, and 3.1.',
				'Automated PyPI releases with GitHub Actions.',
			],
		},
	},
	{
		id: 0,
		image: {
			src: '/img/projects/apex.svg',
			class: ['w-6/12', 'md:w-8/12', 'xl:w-7/12'],
		},
		title: 'laymonage.com',
		url: 'https://github.com/laymonage/apex',
		description: 'A personal website built with Vue, TypeScript, and Tailwind.',
		details: {
			type: 'disc',
			children: [
				'Responsive design for devices with screen width of 320px and up.',
				'Clean architecture with reusable single-file components.',
				'Dark and light modes support.',
			],
		},
	},
	{
		id: 2,
		image: {
			src: '/img/projects/kbbi.png',
		},
		title: 'kbbi-python',
		url: 'https://github.com/laymonage/kbbi-python',
		description: `A module that scraps the
    [online Indonesian dictionary (KBBI)](https://kbbi.kemdikbud.go.id).`,
		details: {
			type: 'disc',
			children: [
				'Provides a much-needed (unofficial) API and a CLI to the online dictionary.',
				'Supports authentication with a KBBI account to increase the rate limit.',
				"Built with `requests`, `beautifulsoup4`, and Python's `argparse` module.",
				'30+ stars and used by 80+ projects on GitHub.',
				'24,000+ downloads according to [PePy](https://pepy.tech/project/kbbi).',
				'`isort` and `flake8`-compliant with `black` code style and 100% code coverage.',
				'Automated PyPI releases with GitHub Actions.',
			],
		},
	},
	{
		id: 5,
		image: {
			src: '/img/projects/sigap.png',
			class: ['p-4'],
		},
		title: 'SIGAP',
		url: 'https://gitlab.cs.ui.ac.id/foss/covid-projects/mobile-apps',
		description: `A mobile app that facilitates medical institutions in fulfilling
      their medical equipment needs amidst the COVID-19 pandemic.`,
		details: {
			type: 'disc',
			children: [
				'Built with Flutter for Android, iOS, and Web.',
				'Utilizes Cloud Firestore to provide real-time data.',
				`Worked with 5 other developers to build the app in one week
          with little prior knowledge about Flutter.`,
			],
		},
	},
	{
		id: 4,
		image: {
			src: '/img/projects/santun.png',
			class: ['p-4'],
		},
		title: 'Santun',
		url: 'https://github.com/laymonage/santun',
		description: 'An Android app to send anonymous messages.',
		details: {
			type: 'disc',
			children: [
				'Built using the MVVM architectural pattern.',
				`Utilizes a RecyclerView populated from a local SQLite database
          synced with a web service.`,
				'Utilizes Kotlin coroutines to avoid I/O blocking.',
				'Modular UI divided into fragments.',
			],
		},
	},
	{
		id: 6,
		image: {
			src: '/img/projects/flappymecin.png',
			class: ['p-4'],
		},
		title: 'Flappy Mecin',
		url: 'https://gitlab.com/MecinLearning/FlappyMecin',
		description: `A Flappy Bird clone with an artificial intelligence opponent
    trained with a [Neuroevolution](https://en.wikipedia.org/wiki/Neuroevolution) algorithm.`,
		details: {
			type: 'disc',
			children: [
				'Implemented a neural network and genetic algorithm from scratch.',
				'Successfully trained the AI so that it has almost zero chance of losing the game.',
				`Made use of C# delegate functions to bind methods dynamically
        and make the code more modular.`,
				`Worked with 2 other classmates to build the game with little prior knowledge
        about Unity and C#.`,
			],
		},
	},
	{
		id: 1,
		image: {
			src: '/img/projects/aiden.svg',
			class: ['dark:bg-white'],
		},
		title: 'AidenBot',
		url: 'https://github.com/laymonage/AidenBot',
		description: 'Multi-purpose bot for LINE built with Flask.',
		details: {
			type: 'disc',
			children: [
				`[250+ users](https://timeline.line.me/user/_dX-DVwUqLSWhnad7z3GzS6asQG9VtPtGvBn3X-g)
          on LINE messaging platform.`,
				'Connected to various APIs like OpenWeather, Wikipedia, Reddit, WolframAlpha, etc.',
			],
		},
	},
	{
		id: 3,
		image: {
			src: '/img/projects/sso-ui.png',
		},
		title: 'SSO UI Starter Pack for Django',
		url: 'https://github.com/laymonage/sso-ui-starter-django',
		description: `A Django starter project ready to be used with Universitas Indonesia's
      [CAS SSO](https://sso.ui.ac.id/cas2).`,
		details: {
			type: 'disc',
			children: [
				"Utilizes `django-cas-ng` to authenticate with UI's SSO system.",
				'100% code coverage and 10/10 code quality rated by `pylint`.',
				'Includes preconfigured Travis CI script for linting, testing, and Heroku deployment.',
			],
		},
	},
	{
		id: 7,
		image: {
			src: '/img/projects/eval.png',
			class: ['w-1/2'],
		},
		title: 'eval',
		url: 'https://github.com/laymonage/eval',
		description: 'A simple form to write anonymous evaluations for me.',
		details: {
			type: 'disc',
			children: [
				'Minimal setup with HTML, CSS (Materialize), and JS (JQuery).',
				'Serverless architecture with Netlify Forms to handle form submissions.',
			],
		},
	},
];

const artProjects = [
	{
		id: 5,
		image: {
			src: '/img/projects/sagesans.svg',
			class: ['fill-current', 'text-white'],
		},
		title: 'sage sans',
		url: 'https://github.com/laymonage/sagesans',
		description: `A sans-serif font based on my own handwriting,
    made with FontForge and released under OFL 1.1.`,
		details: {
			type: 'disc',
			children: [
				'13,500+ downloads on [DaFont](https://www.dafont.com/sage-sans.font).',
				"Featured in some children's books published by Verlagsgruppe Oetinger.",
			],
		},
	},
	{
		id: 4,
		image: {
			src: '/img/projects/tiga.jpg',
			class: ['w-3/4'],
		},
		title: 'Tiga',
		url: 'https://www.instagram.com/p/BdRHV1TDYqx',
		description: 'A digitalized final assignment for my comic class.',
	},
	{
		id: 3,
		image: {
			src: '/img/projects/lunacy.png',
			class: ['p-4', 'w-8/12', 'dark:bg-white'],
		},
		title: 'Lunacy',
		url: 'https://line.me/S/shop/theme/detail?id=33ef311d-7d79-444b-8e22-1f08d09c3f4b',
		description: 'A minimalist, simple, and clean LINE theme with beige and blue color scheme.',
	},
	{
		id: 2,
		image: {
			src: '/img/projects/dsobb.png',
		},
		title: 'The Dark Side of Big Ben',
		url: 'https://www.youtube.com/watch?v=CEDrikeKgZs',
		description: 'A digital painting mashup of Big Ben and the legendary album art.',
	},
	{
		id: 1,
		image: {
			src: '/img/projects/aidensreactions.png',
			class: ['w-3/4'],
		},
		title: "Aiden's Reactions",
		url: 'https://telegram.me/addstickers/AidenR1',
		description: `An expressive sticker set for your daily conversations,
    available on [Telegram](https://telegram.me/addstickers/AidenR1)
    and [LINE](https://line.me/S/sticker/1306613).`,
	},
	{
		id: 0,
		image: {
			src: '/img/projects/portal2linetheme.png',
		},
		title: 'Portal 2 LINE Theme',
		url: 'https://laymonage.deviantart.com/art/Portal-2-LINE-Theme-549706365',
		description: 'A clean Portal 2 theme for LINE Android app.',
	},
];

const otherProjects = [
	{
		id: 0,
		image: {
			src: '/img/projects/tarunglabddp1.png',
		},
		title: 'TarungLab: Dasar-Dasar Pemrograman 1',
		url: 'https://github.com/laymonage/TarungLabDDP1',
		description: `A collection of learning materials in Indonesian for
    basic programming with Python.`,
	},
];

export const software = {
	id: 0,
	type: 'Software',
	anchor: 'software',
	data: softwareProjects,
};

export const art = {
	id: 1,
	type: 'Art',
	anchor: 'art',
	data: artProjects,
};

export const other = {
	id: 2,
	type: 'Other',
	anchor: 'other',
	data: otherProjects,
};

export default [software, art, other];