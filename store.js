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
        ]
        

          
        }

)