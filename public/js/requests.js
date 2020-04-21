//New vue instance
var app = new Vue({
    el: '#app',
    data: {
      requests: []
    },
    methods: {
      upvoteRequest(id) {
        const upvote = functions.httpsCallable('upvote');
        upvote({ id })
          .catch(error => {
            console.log(error.message)
          });
      }
    },
    mounted() {
        const ref = db.collection('requests').orderBy('upvotes', 'desc');
//listlen to changes

ref.onSnapshot(snapshot => {

    let requests = [];
    snapshot.forEach(doc => {
        requests.push({...doc.data(), id: doc.id})
});
this.requests = requests


});

    }
  });

