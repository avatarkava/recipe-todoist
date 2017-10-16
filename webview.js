module.exports = (Franz, options) => {
  function getTasks() {
    
    let todayCount = document.querySelector('#top_filters .counter.overdue_color').innerHTML;   
    let inboxCount = document.querySelector('#filter_inbox .counter').innerHTML; 	 

	let todayOverdue = parseInt(todayCount) ? todayCount : 0;
    let inbox = parseInt(inboxCount) > 0 ? inboxCount : 0

    if (todayOverdue > 0 || inbox > 0) {
      Franz.setBadge(todayOverdue, inbox);
	}
  }

  Franz.loop(getTasks);
    
};