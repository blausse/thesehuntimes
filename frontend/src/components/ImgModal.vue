<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="modal-title">
      <h1>Add image</h1>
      <v-icon class="close" @click="show=false">mdi-close</v-icon>
      </div>
      <p v-if="loading">Uploading...</p>
      <div>
        <label for="up">input upload:</label>
          <v-col cols="12"><v-text-field label="Caption" v-model="caption"></v-text-field></v-col>
          <v-col cols="12"><v-checkbox label="This image will be preview" v-model="preview"></v-checkbox></v-col>
        <input type="file" @change="create" id="up" ref="file" />
        
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
export default {
  components: {
  },
  data() {
    return {
      img1: "",
      preview:false,
      imageData:null,
      caption:'',
      command: null,
      show: false,
      loading: false
    };
  },
  computed: {
  },
  methods: {
    onUpload() {
    this.img1 = null;
    const storageRef = firebase
        .storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, error => {
            console.log(error.message)
        }, () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
                this.img1 = url;
                if(this.preview){
                  const preview = this.img1
                  const data = {
                    command: this.command,
                    preview: preview,
                    caption: this.caption,
                    data: {
                        src: this.img1,
                        alt: this.caption,
                    }
                };
                this.$emit("onConfirm", data);
                }else{
                    const data = {
                    command: this.command,
                    data: {
                        src: this.img1,
                        alt: this.caption,
                        title: this.id
                    }
                };
                this.$emit("onConfirm", data);
                }
                this.loading=false
                this.closeModal();
            });
    });
},
    create (event) {
      this.loading=true
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
      },
    showModal(command) {
      // Add the sent command
      this.command = command;
      this.show = true;
    },
    closeModal() {
      this.show = false;
      this.img1 = "";
    },
}
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 90%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
}
.modal-title{
  display:flex;justify-content: space-between;
}
.close{
  position: relative;
  top:-15px
}
</style>
