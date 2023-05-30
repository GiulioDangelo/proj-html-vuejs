import { reactive } from 'vue'

export const store = reactive({
          menuList:[
            {
              'item': 'HOME',
            },
    
            {
              'item': 'PAGES',
            },
    
            {
              'item': 'TOURNAMENT',
            },
    
            {
              'item': 'SHOP',
            },
    
            {
              'item': 'BLOG',
            },
    
            {
              'item': 'CONTACT',
            },
          ],

          clans:[
            {
                'name': "Ninja Warrior Gaming",
                'img': "src/assets/img/1.png",
                'nation': "Italy",
                'games': [
                    {
                        'game': "AC",
                        'text': "Assassin’s Creed"
                    },
                    {
                        'game': 'Pubg',
                        'text': "PUBG Battleground"
                    }
                ]
            },
        
            {
                'name': "King Gaming",
                'img': "src/assets/img/2.png",
                'nation': "Italy",
                'games': [
                    {
                        'game': "COD",
                        'text': "Call Of Duty"
                    },
                    {
                        'game': 'AC',
                        'text': "Assassin’s Creed"
                    }
                ]
            },
        
            {
                'name': "SkullG Gaming",
                'img': "src/assets/img/3.png",
                'nation': "",
                'games': [
                    {
                        'game': ""
                    },
                    {
                        'game': ''
                    }
                ]
            },
        
            {
                'name': "Panda",
                'img': "src/assets/img/4.png",
                'nation': "",
                'games': [
                    {
                        'game': ""
                    },
                    {
                        'game': ''
                    }
                ]
            },
        
            {
                'name': "Witch Gaming",
                'img': 'src/assets/img/5.png',
                'nation': "India",
                'games':[
                    {
                        'game': "Pubg",
                        'text': "PUBG Battleground"
                    },
                    {
                        'game': 'AC',
                        'text': "Assassin’s Creed"
                    }
                ]
            },
        
            {
                'name': "Witch Astro",
                'img': "src/assets/img/6.png",
                'nation': "India",
                'games': [
                    {
                        'game': "COD",
                        'text': "Call Of Duty"
                    },
                    {
                        'game': 'AC',
                        'text': "Assassin’s Creed"
                    }
                ]
            },
        ],

        games:[
            {
              'img': 'src/assets/img/protfolio1.png',
              'name': 'Call Of Duty',
              'text': 'Donec sollicitudin malesuada.'
            },
            {
                'img': 'src/assets/img/protfolio2.png',
                'name': 'Tomb Raider',
                'text': 'Donec sollicitudin malesuada.'
            },
            {
                'img': 'src/assets/img/protfolio3.png',
                'name': 'Mortal Kombat X',
                'text': 'Donec sollicitudin malesuada.'
            },
            {
                'img': 'src/assets/img/protfolio4.png',
                'name': 'Assassin’s Creed',
                'text': 'Donec sollicitudin malesuada.'
            },
          ],
          
        members:[
            {
                'name': 'Cristiano Messi',
                'img': 'src/assets/img/team1.png',
                'job': 'CEO/Founder',
                'social':[{
                    'facebook': 'src/assets/img/image (4).svg',
                    'twitter': 'src/assets/img/image (5).svg',
                    'linkedin': 'src/assets/img/image (6).svg',
                    'instagram': 'src/assets/img/image (7).svg',
                }
                ],
                
            },
            {
                'name': 'Sergio Naymer',
                'img': 'src/assets/img/team2.png',
                'job': 'Programmer',
                'social':[{
                    'facebook': 'src/assets/img/image (4).svg',
                    'twitter': 'src/assets/img/image (5).svg',
                    'linkedin': 'src/assets/img/image (6).svg',
                    'instagram': 'src/assets/img/image (7).svg',
                }
                ],
                
            },
            {
                'name': 'Antonella Rocuzzo',
                'img': 'src/assets/img/team3.png',
                'job': 'Project Menager',
                'social':[{
                    'facebook': 'src/assets/img/image (4).svg',
                    'twitter': 'src/assets/img/image (5).svg',
                    'linkedin': 'src/assets/img/image (6).svg',
                    'instagram': 'src/assets/img/image (7).svg',
                }
                ],
                
            },
            {
                'name': 'Lionel Ramos',
                'img': 'src/assets/img/team4.png',
                'job': 'Game Designer',
                'social':[{
                    'facebook': 'src/assets/img/image (4).svg',
                    'twitter': 'src/assets/img/image (5).svg',
                    'linkedin': 'src/assets/img/image (6).svg',
                    'instagram': 'src/assets/img/image (7).svg',
                }
                ],
                
            },
        ]
        }

)
