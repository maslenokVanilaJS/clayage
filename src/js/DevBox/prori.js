(function(window){
    // You can enable the strict mode commenting the following line
    // 'use strict';
    // This function will contain all our code
    function myLibrary(){
    var _myLibraryObject = {};
    // We will add functions to our library here !
    return _myLibraryObject;
    }
    // We need that our library is globally accesible, then we save in the window
    if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
    }
    })(window); // We send the window variable withing our function
    // Then we can call it using
    console.log(myWindowGlobalLibraryName);


    (function(window){
        // You can enable the strict mode commenting the following line
        // 'use strict';
        // This function will contain all our code
        function myLibrary(){
        var _myLibraryObject = {};
        // Just create a property to our library object.
        _myLibraryObject.myCustomLog = function(thingToLog){
        console.log("My-Custom-Log > Type of variable : " + typeof(thingToLog));
        console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
        console.log("My-Custom-Log > Length : " + (thingToLog).length);
        return console.log(thingToLog);
        };
        return _myLibraryObject;
        }
        // We need that our library is globally accesible, then we save in the window
        if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
        window.myWindowGlobalLibraryName = myLibrary();
        }
        })(window); // We send the window variable withing our function
        // Then we can call our custom function using
        myWindowGlobalLibraryName.myCustomLog(["My library","Rules"]);



        (function(window){
            // You can enable the strict mode commenting the following line
            // 'use strict';
            // This function will contain all our code
            function myLibrary(){
            var _myLibraryObject = {};
            // This variable will be inaccessible to the user, only can be visible in the scope of your library.
            var settings = {
            volume:100,
            mute:false
            };
            // Change a private property
            _myLibraryObject.setVolume = function(volume){
            settings.volume = volume;
            return volume;
            };
            // Change a private property
            _myLibraryObject.setMute = function(muteStatus){
            if(typeof(muteStatus) === 'boolean'){
            settings.mute = muteStatus;
            }else{
            console.error("You need to disable or enable the sound !");
            }
            return settings.mute;
            };
            // Change a private property
            _myLibraryObject.haveSound = function(){
            return settings.mute;
            };
            return _myLibraryObject;
            }
            // We need that our library is globally accesible, then we save in the window
            if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
            window.myWindowGlobalLibraryName = myLibrary();
            }
            })(window); // We send the window variable withing our function
            // Now see the content of your library
            console.log(myWindowGlobalLibraryName);
            // It should ouput only 3 properties (setMute, setVolume, haveSound)
            // And the settings variable can be only be accessed in your library, not outside

            / Then your variable will be exposed with this method !
_myLibraryObject.getSettings = function(){
return settings;
};
// You can create a get method without expose your variable using something like this
// The object keys will be copied to a new object instead our object.
// Note that you need to achieve this method according to the structure of your variable (or if it's an array)
_myLibraryObject.getSettings = function(){
var mySecurityCopy = {};
for(var i in settings){
if(i)
mySecurityCopy[i] = settings[i];
}
}
return mySecurityCopy;
};