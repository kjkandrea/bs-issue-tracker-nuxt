<template>
  <form ref="form" @submit.prevent="onSubmitForm" action="">
    <h1 v-if="update">이슈 수정</h1>
    <h1 v-else>신규 이슈 생성</h1>
    <p v-if="failValid"><strong style="color:red">다 입력해야해요!</strong></p>
    <p>
      <label>
        제목 입력
        <input type="text" name="title" placeholder="제목을 입력하세요." v-model="formValues.title"/>
      </label>
    </p>
    <p>
      <label>
        내용 입력
        <textarea name="content" placeholder="내용을 입력하세요." v-model="formValues.content"/>
      </label>
    </p>
    <p>
      <button type="submit">제출하기</button>
      <nuxt-link to="/">목록으로 이동</nuxt-link>
    </p>
  </form>
</template>

<script>
export default {
  name: 'IssueForm',
  props: {
    update : Boolean
  },
  data() {
    return {
      failValid: false,
      category: '',
      formValues: {
        title: '',
        content: ''
      },
      createdDate: null,
    }
  },
  computed: {
    validation: function() {
      return {
        title: this.formValues.title.trim(),
        content: this.formValues.content.trim(),
      }
    },
    isValid: function () {
      const validation = this.validation;
      return Object.keys(validation).every(function(key) {
        return validation[key]
      })
    }
  },
  methods: {
    onSubmitForm() {
      if(this.isValid){
        if(this.update){
          this.updateRequest()
        }else{
          this.createRequest()
        }
      }else {
        this.failValid = true
      }
    },
    createRequest() {
      this.createdDate = new Date();
      const formData = {
        "title": this.formValues.title,
        "date": this.createdDate,
        "content": this.formValues.content,
        "category": "open",
      }
      this.$store.dispatch('issues/createIssue', formData);
    },
    updateRequest() {
      this.updateDate = new Date();
      const formData = {
        "title": this.formValues.title,
        "date": this.createdDate,
        "content": this.formValues.content,
        "category": "open",
      }
      this.$store.dispatch('issues/updateIssue', formData);
    },
    async dataFetch() {
      try {
        const data = await this.$store.state.issues.issue
        this.formValues.title = data.title.rendered
        this.formValues.content = data.content.rendered
      } catch(err) {
        console.log(err)
      }
    }
  },
  mounted() {
    if(this.update){
      this.dataFetch()
    }
  }
}
</script>