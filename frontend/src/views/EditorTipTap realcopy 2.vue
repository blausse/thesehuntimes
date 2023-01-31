<template>
  <div class="editor">
    <ImgModal ref="ytmodal" @onConfirm="addCommand" />
    <EditorMenuBar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon small color="black">mdi-format-bold</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon small color="black">mdi-format-italic</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <v-icon small color="black">mdi-format-strikethrough</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          U
        </button>
        <button class="menubar__button" @click="openModal(commands.image)">
          <v-icon small color="black">mdi-image</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <v-icon small color="black">mdi-code-tags</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <v-icon small color="black">mdi-comment-quote</v-icon>
        </button>
      </div>
    </EditorMenuBar>
    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import { Blockquote, Bold, Code, Image, Italic,Strike,Underline} from "tiptap-extensions";
import ImgModal from "./ImgModal";

export default {
  // name: "editor",
  components: {
    EditorContent,
    EditorMenuBar,
    ImgModal,
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Image(),
          new Code(),
          new Blockquote(),
        ],
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
    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    },
    setContent() {
      this.editor.setContent(this.$route.params.content);
    },
  },
};
</script>
<style lang="scss">
/*
Please don't look at this, as this was a fast proof of concept to solve an issue.
*/
.editor{
  border:2px solid black;
  border-radius:20px
  }
.menubar {
  display: flex;
  align-items: center;
  padding:1rem;
  border-bottom:2px solid black
}

.menubar__button {
  font-weight: 700;
  display: inline-block;
  padding:0 1rem;
  background: rgba(0, 0, 0, 0);
  border: 0;
  color: #000;
  cursor: pointer;
  border-right: 1px solid #ededed;
}
.editor__content{
  padding:1rem
}
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
    display:block;
    margin:auto;
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
*:focus{outline:none;}
</style>
