<script>
import usersData from '@/assets/users.json';

export default {
  data() {
    return {
      userId: parseInt(this.$route.params.id),
      activeTab: 'profile',
      users: usersData
    };
  },
  computed: {
    currentUser() {
      return this.users.find(user => user.id === this.userId) || this.users[0];
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.userId = parseInt(to.params.id);
    next();
  },

};
</script>

<template>
    <div class="container">
        <div class="profile-header">
        <div class="profile-photo">
            <img :src="currentUser.image" :alt="currentUser.name">
        </div>
        <div class="profile-nav">
            <ul class="nav-menu">
            <li>
                <RouterLink :to="`/user/${userId}/profile`" :class="{ active: activeTab === 'profile' }">
                    Profile
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="`/user/${userId}/posts`" :class="{ active: activeTab === 'profile' }">
                    Posts
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="`/user/${userId}/contact`" :class="{ active: activeTab === 'profile' }">
                    Contact
                </RouterLink>
            </li>
            </ul>
        </div>
        </div>

        <RouterView :current-user="currentUser"></RouterView>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.profile-photo {
  flex: 0 0 200px;
  margin-right: 40px;
}

.profile-photo img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.profile-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin-bottom: 30px;
}

.nav-menu li {
  margin-right: 20px;
}

.nav-menu a {
  text-decoration: none;
  color: #555;
  font-weight: 600;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  background-color: #42b883;
  color: white;
}
</style>