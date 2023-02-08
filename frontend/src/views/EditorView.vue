<template>
    <div class="editor">
      <ImgModal ref="ytmodal" @onConfirm="addCommand" class="modal"/>
        <v-col cols="12" class="main-title"><v-text-field label="Main Title" v-model="mainSc"></v-text-field></v-col>
        <v-col cols="12" class="sub-title"><v-text-field label="Sub Title1" v-model="subSc1"></v-text-field><v-icon @click="subtitle2=true">mdi-plus</v-icon></v-col>
        <v-col cols="12" class="sub-title" v-if="subtitle2"><v-text-field label="Sub Title2" v-model="subSc2"></v-text-field><v-icon @click="subtitle3=true">mdi-plus</v-icon><v-icon @click="subtitle2=false">mdi-minus</v-icon></v-col>
        <v-col cols="12" class="sub-title" v-if="subtitle3"><v-text-field label="Sub Title3" v-model="subSc3"></v-text-field><v-icon @click="subtitle3=false">mdi-minus</v-icon></v-col>
        <editor-menu-bar  :editor="editor" v-slot="{ commands, isActive}">
            <div class="menubar">
                <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click.prevent="commands.bold"><v-icon small color="black">mdi-format-bold</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click.prevent="commands.italic"><v-icon small color="black">mdi-format-italic</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click.prevent="commands.strike"><v-icon small color="black">mdi-format-strikethrough</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click.prevent="commands.underline">U</button>
                <button class="menubar__button" @click="openModal(commands.image)"><v-icon small color="black">mdi-image</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.code() }" @click.prevent="commands.code"><v-icon small color="black">mdi-code-tags</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.code_block() }" @click.prevent="commands.code_block"><v-icon small color="black">mdi-code-not-equal-variant</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click.prevent="commands.paragraph"><v-icon small color="black">mdi-format-paragraph</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click.prevent="commands.heading({ level: 1 })"><v-icon small color="black">mdi-format-header-1</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click.prevent="commands.heading({ level: 2 })"><v-icon small color="black">mdi-format-header-2</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click.prevent="commands.heading({ level: 3 })"><v-icon small color="black">mdi-format-header-3</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click.prevent="commands.bullet_list"><v-icon small color="black">mdi-format-list-bulleted</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click.prevent="commands.ordered_list"><v-icon small color="black">mdi-order-numeric-ascending</v-icon></button>
                <button class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click.prevent="commands.blockquote"><v-icon small color="black">mdi-comment-quote</v-icon></button>
                <button class="menubar__button" @click.prevent="commands.horizontal_rule"><v-icon small color="black">mdi-view-split-horizontal</v-icon></button>
                <button class="menubar__button" @click.prevent="commands.undo"><v-icon small color="black">mdi-undo</v-icon></button>
                <button class="menubar__button" @click.prevent="commands.redo"><v-icon small color="black">mdi-redo</v-icon></button>
            </div>
        </editor-menu-bar>
        <editor-content class="editor__content" :editor="editor"/>
        <div class="sub-wrap">
            <div class="sub-box">
                <v-container fluid>
                    <v-row align="center">
                      <v-col cols="6"><v-subheader>Theme</v-subheader></v-col>
                      <v-col cols="6"><v-select v-model="theme" :items="states1" menu-props="auto" label="Select" hide-details prepend-icon="mdi-subtitles" single-line></v-select></v-col>
                      <v-col cols="6"><v-subheader>Subject</v-subheader></v-col>
                      <v-col cols="6"><v-select v-model="detail" :items="states2" prepend-icon="mdi-subtitles-outline" menu-props="auto" hide-details label="Select" single-line></v-select></v-col>
                    </v-row>
                </v-container>
            </div>
            <v-col cols="12" class="sub-btn">
                <v-btn class="sub-btn prev" @click="previous()">previous</v-btn>
                <v-btn class="sub-btn" @click="write()">submit</v-btn>
                </v-col>
        </div>
    </div>
</template>

<script>
import { getDatabase, ref, child, push, update } from "firebase/database";
import ImgModal from "../components/ImgModal.vue";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import { Blockquote, CodeBlock, HardBreak, Heading, HorizontalRule, OrderedList, BulletList, ListItem, TodoItem, TodoList, Bold, Code, Italic, Strike, Underline, History,Image } from "tiptap-extensions";
export default {
    components: {EditorContent,EditorMenuBar,ImgModal},
    props: ["description", "menubar", "readOnly"],
    data() {
    return {
        subtitle2:false,
        subtitle3:false,
        mainSc:'',
        subSc1:'',
        subSc2:'',
        subSc3:'',
        contents:'',
        theme: 'AI-ML',
        detail: 'Jarvis',
        view:0,
        preview:'',
        caption:'',
        states1: [
          "WEB","SECURITY","GLOBAL TREND","BLOCK CHAIN","AI-ML","MORE"
        ],
        states2: [
          "Front","Back","Devops","Reference","To Be Done",
          "System","Method","Type",
          "Rank of programming language","Must do it",
          "Definition","Crypto","Block","Hash","Mine","Bitcoin",
          "Jarvis","Tech","Open AI",
        ],
      editor: new Editor({
        extensions: [new Image(),new Blockquote(), new BulletList(), new CodeBlock(), new HardBreak(), new Heading({ levels: [1, 2, 3] }), new HorizontalRule(), new ListItem(), new OrderedList(), new TodoItem(), new TodoList(), new Bold(), new Code(), new Italic(), new Strike(), new Underline(), new History()],
        content: "",
        onUpdate: ({ getHTML }) => {
          let content = getHTML();
          console.log(content);
        },
      }),
    };
  },
    mounted() {
    this.setContent();
    },
    beforeDestroy() {
        this.editor.destroy();
    },
    methods: {
    openModal(command) {
      this.$refs.ytmodal.showModal(command);
      console.log(command)
    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
        this.preview = data.preview
        this.caption = data.caption
      }
    },
    setContent() {
      this.editor.setContent(this.$route.params.content);
    },
    submitDate(){
      var date = new Date();
      var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var month = ['January','Febrary','March','Aprill','May','June','July','August','September','October','November','December'];
      return weekday[date.getDay()]+", "+month[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()
    },
    write(){
        var contents = document.querySelector('.ProseMirror').innerHTML
        const db = getDatabase();
        const newPostKey = push(child(ref(db), 'articles/')).key;
            const postData = {
                id:this.$session.get('userInfo').id,
                name:this.$session.get('userInfo').name,
                mainSc: this.mainSc,
                subSc1: this.subSc1,
                subSc2: this.subSc2,
                subSc3: this.subSc3,
                like:'',
                save:'',
                content : contents,
                date:this.submitDate(),
                view:this.view,
                theme:this.theme,
                detail:this.detail,
                preview:this.preview,
                caption:this.caption,
                postKey:newPostKey
            };
            const updates = {};
            updates['articles/'+newPostKey] = postData;
            update(ref(db), updates);
            return this.$router.push({
                name:'each',
                params:{
                    postKey:newPostKey,
                    jarvis:'jarvis'
                }
            })
    },
    previous(){
        history.back()
    }
    }
    }
</script>

<style lang="scss">
.prev{
    margin-right:1rem
}
.modal{
    z-index:10
}
.sub-wrap{
    max-width:1000px;
    margin:auto;;
    display:block;
    text-align:center;
}
.sub-box{
    max-width:1000px;
    margin:auto;
    display:block;
    text-align:center;
    border:1px solid #cdcdcd;
    box-sizing: border-box;
    padding:1rem;
    border-radius:20px
    }
    .main-title,.sub-title{
        max-width:1000px;
        margin:auto;
        padding-right:0;
        padding-left:0
    }
.editor {
    position: relative;
    // max-width: 30rem;
    margin: 0 auto 5rem auto;
    .menubar {
        text-align: center;
        border-bottom: 1px solid #ddd;
        padding: 0.2rem 0;
        transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
        &.is-hidden {
            visibility: hidden;
            opacity: 0;
        }

        &.is-focused {
            visibility: visible;
            opacity: 1;
            transition: visibility 0.2s, opacity 0.2s;
        }

        &__button {
            font-weight: bold;
            display: inline-flex;
            background: transparent;
            border: 0;
            color: black;
            padding: 0.2rem 0.5rem;
            margin-right: 0.2rem;
            border-radius: 3px;
            cursor: pointer;

            &:hover {
                background-color: rgba(black, 0.05);
            }

            &.is-active {
                background-color: rgba(black, 0.1);
            }
        }

        span#{&}__button {
            font-size: 13.3333px;
        }
    }

    .editor__content {
        margin:auto;
        max-width:1000px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        .ProseMirror {
            min-height: 10rem;
            padding: 0.5rem 0;
            &:focus {
                outline: none;
            }
            pre {
                padding: 0.7rem 1rem;
                border-radius: 5px;
                background: black;
                color: white;
                font-size: 0.8rem;
                overflow-x: auto;

                code {
                    display: block;
                }
            }

            p code {
                padding: 0.2rem 0;
                border-radius: 5px;
                font-size: 0.8rem;
                font-weight: bold;
                background: rgba(black, 0.1);
                color: rgba(black, 0.8);
            }

            ul,
            ol {
                padding-left: 1rem;
            }

            li > p,
            li > ol,
            li > ul {
                margin: 0;
            }

            a:not(.btn) {
                color: blue;
                text-decoration: underline;
            }
            blockquote {
                border-left: 3px solid rgba(black, 0.1);
                color: rgba(black, 0.8);
                padding-left: 0.8rem;
                font-style: italic;

                p {
                    margin: 0;
                }
            }

            img {
                max-width: 100%;
                max-height:400px;
                border-radius: 3px;
                display:block;
                margin:auto
            }

            table {
                border-collapse: collapse;
                table-layout: fixed;
                width: 100%;
                margin: 0;
                overflow: hidden;

                td,
                th {
                    min-width: 1em;
                    border: 2px solid gray;
                    padding: 3px 5px;
                    vertical-align: top;
                    box-sizing: border-box;
                    position: relative;
                    > * {
                        margin-bottom: 0;
                    }
                }

                th {
                    font-weight: bold;
                    text-align: left;
                }

                .selectedCell:after {
                    z-index: 2;
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: rgba(200, 200, 255, 0.4);
                    pointer-events: none;
                }

                .column-resize-handle {
                    position: absolute;
                    right: -2px;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    z-index: 20;
                    background-color: #adf;
                    pointer-events: none;
                }
            }

            .tableWrapper {
                margin: 1em 0;
                overflow-x: auto;
            }

            .resize-cursor {
                cursor: ew-resize;
                cursor: col-resize;
            }
        }
    }
}
</style>