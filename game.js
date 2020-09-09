FBInstant.initializeAsync()
  .then(function () {
      var progress = 0;
      var interval = setInterval(function () {
        progress += 3;
        FBInstant.setLoadingProgress(progress);

        if (progress >= 95) {
          clearInterval(interval)
          FBInstant.startGameAsync()
            .then(function () {});
          var contextId = FBInstant.context.getID();
          var contextType = FBInstant.context.getType();

          var playerName = FBInstant.player.getName();
          var playerPic = FBInstant.player.getPhoto();
          var playerId = FBInstant.player.getID();
          document.getElementById("name").innerHTML = playerName;
          game.start();
        }
      }, 100);
    });
