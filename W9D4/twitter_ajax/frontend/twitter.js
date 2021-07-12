const FollowToggle = require("./follow_toggle.js");

$( () => {
    const $buttons = $(".follow-toggle");
    
    $buttons.each(function (idx,button) {
        let follow_toggle = new FollowToggle(button);
        let current_user_params = 
        $(button).on("click", follow_toggle.handleClick(current_user_params))
    })

    
});

