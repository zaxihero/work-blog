module.exports = {
    title: '西瓜皮儿',
    theme: 'reco',
    port: 8089,
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    themeConfig: {
        type: 'blog',
        author: '西瓜皮儿',
        startYear: '2022',
        authorAvatar: '/assets/portrait.jpg',
        modePicker: false,
        logo: '/assets/portrait.jpg',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        lastUpdated: '上次更新',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        // 博客设置
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/coderHDY' },
            ]
        },
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: false,
        //valine
        // valineConfig: {
        //     appId: '', // your appId
        //     appKey: '', // your appKey
        //     placeholder: '说说你的看法~',
        //     avatar: 'wavatar',
        //     serverUrl: ''
        // }
    },
    markdown: {
        lineNumbers: true
    },

    plugins: [
        [
            'permalink-pinyin',
            {
                lowercase: true,
                separator: '-'
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        require('./plugins/index.js')
    ],
}