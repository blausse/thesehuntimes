<template>
<div class="wrap">
<div class="editor">
  <ImgModal ref="ytmodal" @onConfirm="addCommand" />
  <div v-if="editor" class="editor-header">
    <div class="editor-1">
    <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
    <v-icon small color="black">mdi-format-bold</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <v-icon small color="black">mdi-format-italic</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      <v-icon small color="black">mdi-format-strikethrough</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
      <v-icon small color="black">mdi-code-tags</v-icon>
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
      <v-icon small color="black">mdi-marker-cancel</v-icon>
    </button>
    <button @click="editor.chain().focus().setMark().run()">
      <v-icon small color="black">mdi-marker</v-icon>
    </button>
    <!-- <button @click="openModal(commands.image)"> -->
      <EditorMenuBar :editor="editor"> 
        <div class="menubar" slot-scope="{ commands}">
    <button class="menubar__button" @click="openModal(commands.image)">
          <v-icon small color="black">mdi-image</v-icon>
      </button>
      </div>
      </EditorMenuBar>
    </div>
    <div class="editor-2">
    <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
      <v-icon small color="black">mdi-format-paragraph</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
      <v-icon small color="black">mdi-format-header-1</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
      <v-icon small color="black">mdi-format-header-2</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
      <v-icon small color="black">mdi-format-header-3</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
      <v-icon small color="black">mdi-format-header-4</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
      <v-icon small color="black">mdi-format-header-5</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
      <v-icon small color="black">mdi-format-header-6</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      <v-icon small color="black">mdi-format-list-bulleted</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      <v-icon small color="black">mdi-order-numeric-ascending</v-icon>
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      <v-icon small color="black">mdi-code-not-equal-variant</v-icon>
    </button>
    </div>
    <div class="editor-3">
    <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
      <v-icon small color="black">mdi-comment-quote</v-icon>
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
      <v-icon small color="black">mdi-view-split-horizontal</v-icon>
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      <v-icon small color="black">mdi-format-page-break</v-icon>
    </button>
    </div>
    <div class="editor-4">
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      <v-icon small color="black">mdi-undo</v-icon>
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      <v-icon small color="black">mdi-redo</v-icon>
    </button>
    </div>
  </div>
  <editor-content :editor="editor" class="content"/>
  </div>
  <div class="btn-box">
  <v-btn small class="prev-btn">Previous</v-btn>
  <v-btn small class="write-btn">Write</v-btn>
  </div>
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent,EditorMenuBar } from 'tiptap'
import ImgModal from './ImgModal.vue'
import {Image} from "tiptap-extensions"

export default {
  components: {
    EditorContent,
    EditorMenuBar,
    ImgModal
  },
props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: null,
      contents:this.$route.params.content,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Image
      ],
      content: this.contents,
      // onUpdate: ({ getHTML }) => {
      //     let content = getHTML();
      //     console.log(content);
      //   },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  methods:{
    openModal(command){
      this.$refs.ytmodal.showModal(command)

    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    },
  }
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
button{
    // border:1px solid black;
    // border-radius: 5px;
    padding:5px
}
.editor-header>button:hover{
    background: yellow;
}
.is-active{
    background: yellow;
}
.editor-header{
    display:flex;flex-wrap:wrap;max-width:1000px;margin:auto;box-sizing: border-box;padding:1rem
}
.editor-1{
    border-right:2px solid #ededed;
    padding-right:1rem;
    margin-right:1rem
}
.editor-1>button:hover{
    background: yellow;
}
.editor-2{
    border-right:2px solid #ededed;
    padding-right:1rem;
    margin-right:1rem
}
.editor-2>button:hover{
    background: yellow;
}
.editor-3{
    border-right:2px solid #ededed;
    padding-right:1rem;
    margin-right:1rem
}
.editor-3>button:hover{
    background: yellow;
}
.editor-4>button:hover{
    background: yellow;
}
.editor{
    border:2px solid black;
    border-radius:20px;
    max-width:1000px;
    margin:auto
    }
.content{
    border-top:2px solid black;
    box-sizing:border-box;
    padding:1rem
}
*:focus{outline:none}
.btn-box{display:flex;justify-content: flex-end;margin-top:1rem};
.write-btn{margin-left:1rem}
.wrap{position: relative;max-width:1000px;margin:auto}
</style>