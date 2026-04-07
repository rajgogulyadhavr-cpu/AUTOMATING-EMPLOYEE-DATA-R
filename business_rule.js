(function executeRule(current, previous) {

    if (current.impact == 1 && current.urgency == 1) {
        current.priority = 1;
    } else if (current.impact == 2 && current.urgency == 2) {
        current.priority = 2;
    } else {
        current.priority = 4;
    }

})(current, previous);