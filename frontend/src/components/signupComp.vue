<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="signup-btn">
          회원가입
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Sign Up</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="submit(),dialog=false">
              Done
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field v-model="name" filled color="primary" label="Name" style="min-height: 96px" type="text"></v-text-field>
      <v-text-field v-model="id" :rules="[rules.id, rules.length(6), rules.idWords]" filled color="primary" counter="12" label="ID" style="min-height: 96px" type="text"></v-text-field>
      <v-text-field v-model="password" :rules="[rules.password, rules.length(8),rules.pwWords]" filled color="primary" counter="15" label="Password" style="min-height: 96px" type="password"></v-text-field>
      <v-text-field v-model="phone" filled color="primary" label="Phone number"></v-text-field>
      <v-text-field v-model="email" :rules="[rules.email]" filled color="primary" label="Email address" type="email"></v-text-field>
      <v-textarea v-model="bio" auto-grow filled color="primary" label="Bio" rows="1"></v-textarea>
      <v-checkbox v-model="agreement" :rules="[rules.required]" color="primary">
        <template v-slot:label>
            I agree to the&nbsp;
          <a href="#" @click.stop.prevent="dialogs = true">Terms of Service</a>
          &nbsp;and&nbsp;
          <a href="#" @click.stop.prevent="dialogs = true">Privacy Policy</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text @click="$refs.form.reset()">
        Clear
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogs" absolute max-width="400" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Legal
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="agreement = false, dialogs = false" >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="white--text" color="deep-purple accent-4" @click="agreement = true, dialogs = false" >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { getDatabase, ref, child, push, update } from "firebase/database";
  export default {
    data: () => ({
      agreement: false,
      bio: 'AI시대에 발 맞추는 개발자가 되겠습니다!',
      dialog: false,
      dialogs:false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      id:undefined,
      name:undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        id: v => !!(v || '').match(/^(?=.*[a-z])(?=.*\d).+$/) ||
          'id must contain an letter, a numeric character',
        idWords: v => v.length <= 12 || 'Max 12 words',
        pwWords: v => v.length <= 15 || 'Max 15 words',
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
    methods:{
      submit(){
        const db = getDatabase();
            const postData = {
                id:this.id,
                name:this.name,
                password:this.password,
                phone:this.phone,
                email:this.email
            };
            const newPostKey = push(child(ref(db), 'users/')).key;
            const updates = {};
            updates['users/'+newPostKey] = postData;
            return update(ref(db), updates);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup-btn{width:100%}
</style>
