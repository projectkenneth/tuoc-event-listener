function EventListener() {
    let _callbackA = () => {};
    let _callbackB = () => {};

    this.registerEventAHandler = function(callback) {
        _callbackA = callback;
    }

    this.registerEventBHandler = function(callback) {
        _callbackB = callback;
    }

    this.onEventA = function() {
        _callbackA();
    }

    this.onEventB = function() {
        _callbackB();
    }

    return this;
}

let listener = new EventListener();

listener.registerEventAHandler(() => {
    console.log('Event A Happened!');
});

listener.registerEventBHandler(() => {
    console.log('Event B Happened!');
});

listener.onEventA();