//CFLPlayers = new Mongo.Collection('cflplayers');


// Template.question3.helpers(
// {player1a: "This is task 1"},
// {player1b: "This is task 2"},
// {player1c: "This is task 3"),



// });



Template.question3.events({
//   questi
// Router.go('/question2');

'click #btn-one': function(){
console.log('PLAY YOUTUBE SONG');
        onYouTubeIframeAPIReady = function () {

        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player("player", {
            height: "170",
            width: "170",
            // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
            videoId: "LdH1hSWGFGU",
            // Events like ready, state change,
            events: {
                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();
                }
            }
        });
    };
    YT.load();


}

}); //end of events
