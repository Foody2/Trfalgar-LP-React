import images from './images';

const services = [
    {
      imgUrl: images.icon__search,
      title: 'Search doctor',
      subtitle: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      imgUrl: images.icon__pharmacy,
      title: 'Online pharmacy',
      subtitle: 'Buy  your medicines with our mobile application with a simple delivery system',
    },
    {
      imgUrl: images.icon__consultation,
      title: 'Consultation',
      subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      imgUrl: images.icon__info,
      title: 'Details info',
      subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      imgUrl: images.icon__care,
      title: 'Emergency care',
      subtitle: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
    },
    {
      imgUrl: images.icon__tracking,
      title: 'Tracking',
      subtitle: 'Track and save your medical history and health data ',
    },
  ];


  const testimonials = [
      {
      testImg: images.test__image__1,
      testName: 'Edward Newgate',
      testTitle: 'Founder Circle',
      testimonial: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
      },
      {
        testImg: images.test__image__2,
        testName: 'Mia Newgate',
        testTitle: 'Founder Circle',
        testimonial: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
      },
      {
        testImg: images.test__image__3,
        testName: 'Kira Newgate',
        testTitle: 'Founder Circle',
        testimonial: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
      },
      {
        testImg: images.test__image__4,
        testName: 'Venessa Newgate',
        testTitle: 'Founder Circle',
        testimonial: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
      },
      {
        testImg: images.test__image__5,
        testName: 'Karla Newgate',
        testTitle: 'Founder Circle',
        testimonial: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
      },
  ]

  const posts = [
     {
        postImg: images.post__image__1,
        postTitle: 'Disease detection, check up in the laboratory',
        postText: 'In this case, the role of the health laboratory is very important to doa disease detection...',
     },
     {
        postImg: images.post__image__2,
        postTitle: 'Herbal medicines that are safe for consumption',
        postText: 'Herbal medicine is very widely used at this time because of its very good for your health...',
     },
     {
        postImg: images.post__image__3,
        postTitle: 'Natural care for healthy facial skin',
        postText: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
     },
  ]

  const footerLinks = [
   { 
    title: "Company",
    links: [
        {
            name: "About",
            link: "https://www.trafalgar.com/about/",
          },
          {
            name: "Testimonials",
            link: "https://www.trafalgar.com/testimonials/",
          },
          {
            name: "Find a doctor",
            link: "https://www.trafalgar.com/doctor/",
          },
          {
            name: "App",
            link: "https://www.trafalgar.com/app/",
          },
    ],
    },
    { 
        title: "Region",
        links: [
            {
                name: "Indonesia",
                link: "https://www.trafalgar.com/indonesia/",
              },
              {
                name: "Singapore",
                link: "https://www.trafalgar.com/singapore/",
              },
              {
                name: "Hongkong",
                link: "https://www.trafalgar.com/hongkong/",
              },
              {
                name: "Canada",
                link: "https://www.trafalgar.com/Canada/",
              },
        ],
    },
    { 
        title: "Help",
        links: [
            {
                name: "Help center",
                link: "https://www.trafalgar.com/help/",
              },
              {
                name: "Contact support",
                link: "https://www.trafalgar.com/contact/",
              },
              {
                name: "Instructions",
                link: "https://www.trafalgar.com/instructions/",
              },
              {
                name: "How it works",
                link: "https://www.trafalgar.com/how-it-works/",
              },
        ],
    },
  ]

  export default { services, testimonials, posts, footerLinks };