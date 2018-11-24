angular.module('CoinGame', [])

.component('flipper', {
  template:
    `
    <div class="points">
      <h1>{{ $ctrl.points }}</h1>
    </div>
    <div id="coin" data-ng-click="$ctrl.flip()">
      <div class="side-a"></div>
      <div class="side-b"></div>
    </div>`,
  controller: function ($element, $timeout) {

    this.points = 0;

    this.coin = $element[0].querySelector('#coin');

    this.flip = () => {

      this.coin.className = '';

      $timeout(() => {

        var flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
        this.coin.className = flipResult;

        $timeout(() => {

          if(flipResult === 'heads') this.points += 1;
          if(flipResult === 'tails') this.points = 0;

        }, 1000);

      }, 10);



    };

  }
});

window.addEventListener('DOMContentLoaded', function (e) {

  angular.bootstrap(document.querySelector('#coin_game'), [ 'CoinGame' ])

});