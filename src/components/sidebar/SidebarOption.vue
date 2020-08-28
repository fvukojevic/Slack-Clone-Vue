<template>
    <div class="sidebar_option" @click="runOption">
        <icon v-if="icon" class="sidebar_option_icon" :name="icon"></icon>
        <h3 v-if="icon"> {{ title }}</h3>
        <h3 v-else class="sidebar_option_channel">
            <span class="sidebar_option_hash"># {{title}}</span>
        </h3>
    </div>
</template>

<script>
    export default {
        props: {
            icon: String,
            title: String,
            id: String,
            option: {
                type: Function,
                default: null,
            },
        },
        methods: {
          runOption() {
              if(this.option) {
                  this.option();
              }
          }
        }
    }
</script>

<style scoped>
    .sidebar_option {
        display:flex;
        align-items: center;
        font-size: 12px;
        padding-left: 2px;
        cursor: pointer;
    }

    .sidebar_option:hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    .sidebar_option_icon {
        padding: 10px;
        font-size: 15px !important;
    }

    .sidebar_option_channel {
        padding: 10px 0;

    }

    .sidebar_option_hash {
        padding: 10px
    }

    .sidebar_option > h3 {
        font-weight: 500;
    }
</style>