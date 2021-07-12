class FollowToggle{

    constructor(el){
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('inital-follow-state');
        this.$el.text(this.render())
    }

    render(){
        if (this.followState === 'unfollowed'){
            return 'Follow!'
        }else{
            return 'Unfollow!'
        }
    }

    handleClick(params){
        this.preventDefault();
        
        if (this.followState === 'followed'){
            FollowToggle.render()
            return $.ajax({
                url: `users/${this.userId}/follow`,
                method:'DELETE',
                dataType: 'JSON'
            })
        }else{
            FollowToggle.render()
            return $.ajax({
                url: `users/${params.userId}/follow`,
                method:'POST',
                data: {
                    followee_id: this.userId
                },
                dataType: 'JSON'
            })
        }
    }
}

module.exports = FollowToggle;