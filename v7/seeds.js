var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Granite Hill",
        image: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/8+Reasons/1.jpg",
        description: "There is a lot of vegetations around this campground. It is pretty but watch out for mosquito."
    },
    {
        name: "Beartooth Foothill",
        image: "https://images.unsplash.com/photo-1517523976439-e29c573a2b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12bb07633a572791aa50cad3db93b4aa&auto=format&fit=crop&w=1050&q=80",
        description: "You can camp anywhere at Beartooth mountain area."
    },
    {
        name: "Desert Heat",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d95171e276fbd03de651f9aecb64b53d&auto=format&fit=crop&w=1050&q=80",
        description: "Camp is permitted at the desert area in Utah, remember LEAVE NO TRACE"
    },
    {
        name: "Hyalite Canyon",
        image: "https://images.unsplash.com/photo-1519095614420-850b5671ac7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ffaa8c9b9aca319b57204b5d620f56&auto=format&fit=crop&w=1050&q=80",
        description: "The best sites are on the lake shore, arrive early to pick a good site"
    },
    {
        name: "Madison Trailer Park",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0b66b816b4653b3b0e02af008c82403&auto=format&fit=crop&w=1050&q=80",
        description: "As long as you have a trailer, you can park at the famous fly fishing mecca Madison riverside"
    },
    {
        name: "Zion National Park",
        image: "https://images.unsplash.com/photo-1445888985293-8e1b904061c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=539fc8bc38afc1fd808f9ebf7762cdd7&auto=format&fit=crop&w=1050&q=80",
        description: "Zion is hot in summer, but still the campsites are hard to reserve."
    },
    {
        name: "Alaska Yurt",
        image: "https://images.unsplash.com/photo-1525177089949-b1488a0ea5b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2133a2e6648c39b6d1845bcc603b09ce&auto=format&fit=crop&w=1050&q=80",
        description: "Travel to the north, see the magic light!"
    },
    {
        name: "Delicate Arch Camp",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1050&q=80",
        description: "Located in Utah Arches NP, you won't get lonely surrounded by ancient red rocks"
    }
];

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "this place is great, but i wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("added a comment");
                            }
                        }
                    );
                }
            });
        });
    });    
    
    //add a few comments
}

module.exports = seedDB;
