export const data = {
    users:[
        {
            id:1,
            name:"John Smith",
            username:"user",
            password:"pass",
            image:"images/1.jpg",
            statuses:{
                images:[],
                isSeen:true
            }
        
        },
        {
            id:2,
            name:"Edward Cale",
            username:"user",
            password:"pass",
            image:"images/4.jpg",
            statuses:{
                images:[],
                isSeen:true
            }

        },
        {
            id:3,
            name:"Nicolas Cage",
            username:"user",
            password:"pass",
            image:"images/5.jpg",
            statuses:{
                images:["adad","dsfsdfsdf"],
                isSeen:true
            }

        },
        {
            id:4,
            name:"Alexy Douglass",
            username:"user",
            password:"pass",
            image:"images/2.jpeg",
            statuses:{
                images:["asdas","sdada", "adadad"],
                isSeen:true
            }

        },
        {
            id:5,
            name:"Monica Seventh",
            username:"user",
            password:"pass",
            image:"images/3.jpg",
            statuses:{
                images:[],
                isSeen:true
            }

        },
        {
            id:6,
            name:"Mari Courie",
            username:"user",
            password:"pass",
            image:"images/6.jpg",
            statuses:{
                images:[],
                isSeen:true
            }

        },
    ],
    messages: [
        {
            id:1,
            userFrom:1,
            userTo:2,
            content:"Hello Galaxy",
            date:{
                day:13,
                month:6,
                year:2022
            }
        },
        {
            id:2,
            userFrom:2,
            userTo:3,
            content:"Hello world",
            date:{
                day:23,
                month:6,
                year:2022
            }

        },
        {
            id:3,
            userFrom:3,
            userTo:3,
            content:"How are you?",
            date:{
                day:5,
                month:6,
                year:2022
            }

        },
        {
            id:4,
            userFrom:4,
            userTo:4,
            content:"Hi",
            date:{
                day:3,
                month:6,
                year:2022
            }

        },
        {
            id:5,
            userFrom:5,
            userTo:4,
            content:"Hello, How are you",
            date:{
                day:15,
                month:7,
                year:2022
            }

        }
    ],

}
