import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-dr-home',
  templateUrl: './dr-home.component.html',
  styleUrl: './dr-home.component.scss',
})
export class DrHomeComponent {
  title = 'DevBookmarks';
  currentScreenWidth!: number;
  showImg!: number;

  propArr: any = [
    {
      loop: 'homeLinks',
      value: 'Home',
      icon: 'home',
      desc: 'DevRouter is a resource hub for frontend developers, providing quick access to essential tools and references.',
    },
    {
      loop: 'vectorLinks',
      value: 'Vector',
      icon: 'polyline',
      desc: 'Discover a wide range of high-quality vector graphics for your design projects. Access tools and libraries for creating scalable vector illustrations.',
    },
    {
      loop: 'fontLinks',
      value: 'Font',
      icon: 'format_shapes',
      desc: 'Explore collections of beautiful fonts and typography resources. Find the perfect font styles to enhance the readability and aesthetics of your website.',
    },
    {
      loop: 'cssLinks',
      value: 'Css',
      icon: 'format_paint',
      desc: 'Access essential CSS tools, frameworks, and generators. Improve your web design and layout skills with the best styles and customizations.',
    },
    {
      loop: 'toolsLinks',
      value: 'Tools',
      icon: 'handyman',
      desc: 'Equip yourself with powerful online tools for coding, debugging, and optimizing. These tools streamline your development process, saving time and effort.',
    },
    {
      loop: 'refLinks',
      value: 'Reference',
      icon: 'note_stack',
      desc: 'A curated collection of references, guides, and documentation. Stay informed with the latest web standards and best practices in development.',
    },
    {
      loop: 'colorLinks',
      value: 'Colours',
      icon: 'palette',
      desc: 'Browse color palettes, generators, and schemes to find your perfect hue. Elevate your design with vibrant and harmonious color combinations.',
    },
    {
      loop: 'pictursLink',
      value: 'Pictures',
      icon: 'image',
      desc: 'Explore free, high-resolution stock images for your projects. Find stunning visuals to complement your content, without worrying about licenses.',
    },
    {
      loop: 'mockupLinks',
      value: 'Mockup',
      icon: 'perm_media',
      desc: 'Access a variety of mockup templates to showcase your designs. From devices to apparel, present your work in a realistic setting.',
    },
    {
      loop: 'iconsLinks',
      value: 'Icons',
      icon: 'add_reaction',
      desc: 'Discover extensive icon libraries for every design need. Add personality to your UI with scalable, customizable icons that suit any style.',
    },
    {
      loop: 'editorLinks',
      value: 'Editor',
      icon: 'edit_square',
      desc: 'Find the best code editors and IDEs for productive development. Write, debug, and enhance your code in an efficient and developer-friendly environment.',
    },
    {
      loop: 'drawingLinks',
      value: 'Drawing',
      icon: 'stylus_note',
      desc: 'Access digital drawing tools for illustrations, wireframes, and designs. Create visually appealing sketches and diagrams with intuitive interfaces.',
    },
    {
      loop: 'builderLinks',
      value: 'Builder',
      icon: 'backup',
      desc: 'Utilize website and layout builders for rapid prototyping and design. Save time by using drag-and-drop tools for easy and responsive design creation.',
    },
    {
      loop: 'learnLinks',
      value: 'Learn',
      icon: 'auto_stories',
      desc: 'Improve your skills with learning resources, tutorials, and courses. Stay ahead with comprehensive guides and materials for all levels of developers.',
    },
    {
      loop: 'aiLinks',
      value: 'Ai',
      icon: 'psychology',
      desc: 'Explore AI-powered tools for automating and enhancing your development workflow. Leverage the latest artificial intelligence innovations to boost productivity.',
    },
  ];
  links: any = [
    {
      vectorLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.openpeeps.com/',
          title: 'OpenPeeps',
          desc: 'Hand-Drawn Vectors',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://opendoodles.com/',
          title: 'Sketchy',
          desc: 'illustrations',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.svgrepo.com/',
          title: 'SvgRepo',
          desc: 'Vectors and Icons',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://icons8.com/illustrations',
          title: 'Ouch',
          desc: 'Icons, photos, Vectors & music.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://weareskribbl.com/',
          title: 'Skribble',
          desc: 'Hand-Drawn Vector (Limited).',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://storyset.com/',
          title: 'StorySet',
          desc: 'Animate and Vectors.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://fresh-folk.com/',
          title: 'FreshFolk',
          desc: 'People and objects.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.manypixels.co/',
          title: 'Manypixels',
          desc: 'Graphic & webDesign.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://themeisle.com/illustrations/',
          title: 'Themeisle',
          desc: 'Free illustrations & vectors.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://iconscout.com/',
          title: 'IconScout',
          desc: "3D's & Animations.",
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://illlustrations.co/',
          title: 'Illlustrations',
          desc: 'Open source vectors.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.ls.graphics/products/whoosh',
          title: 'Whoosh!',
          desc: 'Funny illustrations.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://getwaves.io/',
          title: 'GetWaves',
          desc: 'Wave & Other Svg.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://haikei.app/',
          title: 'Haikei',
          desc: 'Bg Designs Svg & Png.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://humaaans.com/',
          title: 'Humaaans',
          desc: 'Illustrations of people',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://icons8.com/illustrations',
          title: 'Icons8',
          desc: 'Free vector & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://blush.design/',
          title: 'Blush',
          desc: 'Customize Illustrations.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://craftwork.design/downloads/category/freebies/',
          title: 'CraftworkDesign',
          desc: 'Illustrations & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://drawkit.com/',
          title: 'Drawkit',
          desc: 'Hand-drawn 2D & 3D & More.',
        },
      ],
      fontLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://fonts.google.com/',
          title: 'Google Fonts',
          desc: 'Open-Source.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.fontfabric.com/',
          title: 'FontFabric',
          desc: 'Retail & custom.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://open-foundry.com/',
          title: 'Open Foundry',
          desc: 'Open-Source.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.dafont.com/',
          title: 'Dofont',
          desc: 'Free & Premium.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.cufonfonts.com/',
          title: 'Urban Fonts',
          desc: 'Free & Premium.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.urbanfonts.com/',
          title: 'Cufon Fonts',
          desc: 'Desktop & WebFonts.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.fontshare.com/',
          title: 'Font share',
          desc: 'Free fonts service (ITF)',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://fontsinuse.com/',
          title: 'Font In Use ',
          desc: 'A searchable archive.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.fontsinthewild.com/',
          title: 'Font In The Wild ',
          desc: 'Find free & paid.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://fontlibrary.org/',
          title: 'Font Library',
          desc: 'Free & Web Font.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.theleagueofmoveabletype.com/',
          title: 'League of Moveable Type',
          desc: 'OpenSource.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://fontsquirrel.com/',
          title: 'Font Squirrel',
          desc: 'Free fonts..',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://fontspace.com/',
          title: 'Font Space',
          desc: 'Free Legally Licensed.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://fontbundles.net/free-fonts',
          title: 'Font Bundles',
          desc: 'Free & Paid Fonts.',
        },
      ],
      cssLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.joshwcomeau.com/shadow-palette/',
          title: 'Joshwcomeau',
          desc: ' Shadow palettes',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://neumorphism.io/#e0eOe0/',
          title: 'Neumorphism',
          desc: '3D Shadow Effects.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://shadows.brumm.af/',
          title: 'ShadowsBrumm',
          desc: 'Custom Shadow',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://9elements.github.io/fancy-border-radius/',
          title: '9elements',
          desc: 'Fancy Border Radius',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://9elements.github.io/fancy-border-radius/',
          title: '9elements',
          desc: 'Fancy Border Radius',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://bansal.io/',
          title: 'Bansal.io',
          desc: 'Patterns, Filters & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://css-generators.com/',
          title: 'CssGenerator',
          desc: 'Border shapes & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://animate.style/',
          title: 'AnimateCss',
          desc: 'crossbrowser animation.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.minimamente.com/project/magic/',
          title: 'Minimamente',
          desc: 'Css Animation.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://kristofferandreasen.github.io/wickedCSS/',
          title: 'kristofferandreasen',
          desc: 'Css Animation.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://jonsuh.com/hamburgers/',
          title: 'Jonsuh',
          desc: 'Css-animated Hamburgers.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://whirl.netlify.app/',
          title: 'WhirlNetlifyApp',
          desc: 'Loading Animation.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://animista.net/',
          title: 'Animista',
          desc: 'Ready-made animations.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://animation.kaustubhmenon.com/',
          title: 'AnimationLibrary',
          desc: 'Scss / Css3.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://bennettfeely.com/',
          title: 'Bennettfeely',
          desc: 'Css Tools.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://wweb.dev/',
          title: 'wweb.dev',
          desc: 'Css Tools.',
        },
      ],
      toolsLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://freesfx.co.uk/',
          title: 'FreeSfx',
          desc: 'Sound Effects',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.zapsplat.com/',
          title: 'ZapSplash',
          desc: 'Sound Effects & Musics',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.unitconverters.net/',
          title: 'UnitConverter',
          desc: '78 Unit Conversion.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.easytamiltyping.com/',
          title: 'EasyTamilTyping',
          desc: 'Tamil Typing.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://darebee.com/',
          title: 'Darbee',
          desc: 'Visual workouts Pdf.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://an1.com/',
          title: 'AN1.com',
          desc: 'Android Applications.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://temp-mail.org/',
          title: 'Temp Mail',
          desc: 'Temporary Email.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://cleanup.pictures/',
          title: 'Cleanup Picture',
          desc: 'Edit Picture.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.remotemouse.net/',
          title: 'Remote Mouse',
          desc: 'Wireless mouse.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.amp-what.com/',
          title: '&What;',
          desc: 'Unicodes.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://wormhole.app/',
          title: 'Wormhole',
          desc: 'File Share.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.unscreen.com/',
          title: 'Unscreen',
          desc: 'Remove Video Background.',
        },
      ],
      refLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.behance.net/',
          title: 'Behance',
          desc: 'Discover creative work.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://dribbble.com/shots',
          title: 'Dribbble',
          desc: 'Discover creative work.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://slidesgo.com/',
          title: 'Slidego',
          desc: 'Ppt & Slides Theme',
        },
      ],
      colorLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.happyhues.co/',
          title: 'HappyHues',
          desc: 'Colour Combo',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://coolors.co/',
          title: 'Coolors',
          desc: 'Color Pallet Generator',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.grabient.com/',
          title: 'Grabient',
          desc: 'Gradient Colors',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://maketintsandshades.com/',
          title: 'Tints & Shades',
          desc: 'Color generator.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://huemint.com/',
          title: 'Huemint',
          desc: 'Color palette generator',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://superdesigner.co/',
          title: 'Super Designer',
          desc: 'Patterns, Bg & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://colorffy.com/',
          title: 'Colorffy',
          desc: 'Gradient Generator.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://meshgradient.in/',
          title: 'Mesh Gradient',
          desc: 'Gradients.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://color.adobe.com/',
          title: 'Adobe Color',
          desc: 'Generate Pallettes.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://colorhunt.co/',
          title: 'Color Hunt',
          desc: 'Color Palettes.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://khroma.co/',
          title: 'Khroma',
          desc: 'Uses AI to learn which colors.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://colors.muz.li/',
          title: 'MuziColors ',
          desc: 'Color Palette Generator.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://colors.dopely.top/',
          title: 'Dopely Colors',
          desc: 'Color & Gradients.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://flatuicolors.com/',
          title: 'FlatUiColors',
          desc: 'Handpicked colors.',
        },
      ],
      pictursLink: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://unsplash.com/',
          title: 'Unsplash',
          desc: 'Free Imgs.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://openai.com/dall-e-2/',
          title: 'DallE2',
          desc: 'Generate Al Image.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://pexels.com/',
          title: 'Pexels',
          desc: 'Royalty free images & videos.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://pixabay.com/',
          title: 'Pixabay',
          desc: 'Royalty-free images & stock.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://kaboompics.com/',
          title: 'Kaboompics',
          desc: 'Find Perfect free photos.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://freeimages.com/',
          title: 'FreeImages',
          desc: 'Pics, Psd & more.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://burst.shopify.com/',
          title: 'BurstByShopify',
          desc: 'Commercial use.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://stockvault.net/',
          title: 'Stockvault',
          desc: 'Free Stock Images.',
        },
      ],
      mockupLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://unblast.com/',
          title: 'Unblast',
          desc: 'Mockups, fonts, & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.ls.graphics/',
          title: 'Lstore Graphics',
          desc: 'Ui/Ux & scene.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://mockupworld.co/',
          title: 'Mockup World',
          desc: 'Psd Mockups.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://pixeden.com/',
          title: 'Pixeden',
          desc: 'Graphic, web & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://previewed.app/',
          title: 'Previewed',
          desc: 'Device mockups.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://mockups-design.com/',
          title: 'Mockups Design',
          desc: '100% free.',
        },
      ],
      iconsLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://ionic.io/ionicons',
          title: 'Ionicons',
          desc: 'Framework. MIT licensed',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://iconoir.com/',
          title: 'Iconoir',
          desc: 'SVG Icons Library.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://icones.js.org/',
          title: 'Icones.js.org',
          desc: 'All Framework Icons.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://icones.js.org/',
          title: 'Real FavIcon Generator',
          desc: 'Favicon.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://icons8.com/',
          title: 'Icons8',
          desc: 'Icons, illustrations, & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://iconsax.io/',
          title: 'Iconsax',
          desc: 'Vuesax framework.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://iconscout.com/free-icons',
          title: 'IconScout',
          desc: 'Personal or commercial.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://fonts.google.com/icons',
          title: 'Google Icons',
          desc: 'Icons.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://feathericons.com/',
          title: 'Feather Icons',
          desc: 'Open source icons.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://feathericons.com/',
          title: 'Flat Icon',
          desc: 'Free Icons, Stickers & More.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'http://thenounproject.com/',
          title: 'The Noun Project',
          desc: 'Icons and Photos.',
        },
      ],
      editorLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.img2go.com/',
          title: 'Img2go',
          desc: 'Img Editor & Converter',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://svgtopng.com/',
          title: 'Img2go',
          desc: 'Convert any File',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.freeconvert.com/',
          title: 'Free Converter',
          desc: 'upto 1gb',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.sejda.com/en/',
          title: 'Sejda',
          desc: 'PDF Editor Online.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://onlinepngtools.com/',
          title: 'Online Png Tool',
          desc: ' PNG Editor Online.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://tools.pdf24.org/en/',
          title: 'Pdf24Tools',
          desc: ' Edit Pdf.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.cleverpdf.com/',
          title: 'Cleverpdf',
          desc: ' 44 Free Online PDF Tools.',
        },
      ],
      drawingLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.wacom.com/en-us/discover/draw',
          title: 'Wacom',
          desc: 'Draw face & Objects',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.autodraw.com/',
          title: 'Autodraw',
          desc: 'Machine learning.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://quickdraw.withgoogle.com/',
          title: 'Quick draw',
          desc: 'Drawing Game.',
        },
      ],
      builderLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://glitch.com/',
          title: 'Glitch',
          desc: 'Website Builder',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.glideapps.com/',
          title: 'Glideapps',
          desc: 'No Code App Builder.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://vercel.com/',
          title: 'Vercel',
          desc: 'Frontend cloud.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://render.com/',
          title: 'Render',
          desc: 'Cloud to build Apps & Web.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://railway.app/',
          title: 'Railway',
          desc: 'Made for any language.',
        },
      ],
      learnLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://dictionary.cambridge.org/',
          title: 'Dictonary Cambridge',
          desc: 'Dictonary',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://github.com/MasterBrian99/Free-Courses-For-Everyone',
          title: 'FreeCourse',
          desc: 'Udemy & Other Courses.',
        },
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://edu.gcfglobal.org/en/',
          title: 'GcfGlobal',
          desc: ' Learn Everything Free.',
        },
      ],
      aiLinks: [
        {
          img: './assets/DevRouter/Vector.svg',
          link: 'https://www.buildai.space/app/dae3da25-888e-448f-b15c-5a20ca4ca961',
          title: 'BuildAi',
          desc: 'Trip Planner',
        },
      ],
    },
  ];
  menuName = {
    loop: 'homeLinks',
    value: 'Home',
    icon: 'home',
    desc: 'DevRouter is a resource hub for frontend developers, providing quick access to essential tools and references.',
  };

  @ViewChildren('cardScrollContainer')
  cardScrollContainers!: QueryList<ElementRef>;
  @ViewChild('navLinks') navLinks!: ElementRef;

  ngOnInit() {
    this.getCurrentScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.getCurrentScreenWidth();
  }

  getCurrentScreenWidth() {
    this.currentScreenWidth = window.innerWidth;
  }

  scrollNavLeft() {
    if (this.currentScreenWidth > 850) {
      this.navLinks.nativeElement.scrollBy({
        top: -100,
        behavior: 'smooth',
      });
    } else {
      this.navLinks.nativeElement.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    }
  }

  scrollNavRight() {
    if (this.currentScreenWidth > 850) {
      this.navLinks.nativeElement.scrollBy({
        top: 100,
        behavior: 'smooth',
      });
    } else {
      this.navLinks.nativeElement.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    }
  }

  menuSelected(param: any) {
    this.menuName = param;
  }
}
