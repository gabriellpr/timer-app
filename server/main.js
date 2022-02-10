import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

Meteor.startup(() => {
    Meteor.publish('time', function() {
        let self = this;
        //Notifica se o recorde for adicionado a Collection time
        self.added('time', id, time);

        let interval = Meteor.setInterval(function() {
            newTime();
        }, 1000);
        //Notifca que o dado inicial foi enviado.
        this.ready();

        self.onStop(function() {
            self.stop();
            console.log("stopped called");
            //Limpa o intervalo se o cliente se desinscreveu.
            Meteor.clearInterval(interval);
        });
    });
})