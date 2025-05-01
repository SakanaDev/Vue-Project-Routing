<script>
export default {
    props: ['currentUser']
}
</script>

<template>
    <div class="content-section">
      <h2>Contact Information</h2>
      <p><strong>Twitter:</strong> <a :href="currentUser.contact.twitter" target="_blank">{{ currentUser.contact.twitter }}</a></p>
      <p><strong>GitHub:</strong> <a :href="currentUser.contact.github" target="_blank">{{ currentUser.contact.github }}</a></p>
      <p><strong>Website:</strong> <a :href="currentUser.contact.website" target="_blank">{{ currentUser.contact.website }}</a></p>
      <p><strong>Email:</strong> {{ currentUser.contact.email }}</p>
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
</style>