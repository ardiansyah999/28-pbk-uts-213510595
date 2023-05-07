var app = new Vue({
	el: '#app',
	data: {
		activities: [
				{name: 'Belajar JavaScript', completed: false},
				{name: 'Bermain Game', completed: true},
				{name: 'Makan Siang', completed: false}
		],
		newActivity: '',
		showCompleted: false
	},
	methods: {
		addActivity: function() {
			if (this.newActivity.trim() !== '') {
				this.activities.push({name: this.newActivity, completed: false});
				this.newActivity = '';
			}
		},
		removeActivity: function(index) {
			this.activities.splice(index, 1);
		},
		completeActivity: function(index) {
			this.activities[index].completed = true;
		}
	},
	computed: {
		filteredActivities: function() {
			if (this.showCompleted) {
				return this.activities.filter(function(activity) {
					return !activity.completed;
				});
			} else {
				return this.activities;
			}
		}
	}
});