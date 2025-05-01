<script>
export default {
    props: ['currentUser']
}
</script>

<template>
    <div class="content-section">
      <h2>Latest Posts</h2>
      <div class="post" v-for="(post, index) in currentUser.posts" :key="index">
        <h3>{{ post.title }}</h3>
        <p>{{ post.date }}</p>
        <p>{{ post.content }}</p>
      </div>
    </div>
</template>

<style>
.content-section {
  display: block;
  padding: 20px;
  animation: fadeIn 0.5s ease;
}

h2 {
  color: #42b883;
  margin-bottom: 20px;
  font-size: 28px;
}

p {
  margin-bottom: 15px;
}

.post {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.post:last-child {
  border-bottom: none;
}
</style>