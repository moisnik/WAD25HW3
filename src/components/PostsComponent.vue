<template>
  <div class="post-card" v-if="post">
    <div class="post-details">
      <a class="logo" href="#">
        <img
          src="/res/images/icon.png"
          alt="User logo"
          width="50"
          height="50"
        />
      </a>

      
        <p class="author">{{ post.Author }}</p>
        <p class="date">{{ post.formattedDate }}</p>
      
    </div>

    <img
      v-if="post.Image"
      :src="'/' + post.Image"
      class="post-img"
      alt="Post image"
    />

    <p class="body">{{ post.Body }}</p>

    <!-- like nupp + like’ide arv store’ist -->
    <i
      class="material-symbols-outlined"
      style="cursor: pointer;"
      @click="likePostClick"
    >
      thumb_up
    </i>
    <span style="margin-left: 4px;">
      {{ post.likes }}
    </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PostsComponent",
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(["postById"]),
    post() {
      return this.postById(this.postId);
    }
  },
  methods: {
    ...mapMutations(["likePost"]),
    likePostClick() {
      this.likePost(this.postId);
    }
  }
};
</script>
