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
          B
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          I
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <s>S</s>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          U
        </button>
        <button class="menubar__button" @click="openModal(commands.image)">
          <v-icon>mdi-image</v-icon>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
        code
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.Blockquote() }"
          @click="commands.Blockquote"
        >
        code
        </button>
      </div>
    </EditorMenuBar>

    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import { Blockquote, Bold, BulletList, Code, CodeBlock, CodeBlockHighlight, Collaboration, Focus, HardBreak, Heading, Highlight, History, HorizontalRule, Image, Italic, Link, ListItem, Mention, OrderedList, Placeholder, Search, Strike, Suggestions, Table, TableCell, TableHeader, TableRow, TodoItem, TodoList, TrailingNode, Underline } from "tiptap-extensions";
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
          new BulletList(),
          new CodeBlock(),
          new CodeBlockHighlight(),
          new Collaboration(),
          new Focus(),
          new HardBreak(),
          new Heading(),
          new Highlight(),
          new History(),
          new HorizontalRule(),
          new Link(),
          new ListItem(),
          new Mention(),
          new OrderedList(),
          new Placeholder(),
          new Search(),
          new Suggestions(),
          new Table(),
          new TableCell(),
          new TableHeader(),
          new TableRow(),
          new TodoItem(),
          new TodoList(),
          new TrailingNode(),
        ],
        content: this.$route.params.content,
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
      this.editor.setContent(this.content);
    },
  },
};
</script>
<style lang="scss">

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

</style>
