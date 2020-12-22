<template>
  <paginate
    :page-count="10"
    :click-handler="loadUsers"
    :prev-text="prev"
    :next-text="next"
    :hide-prev-next="true"
    :container-class="'vuejs-paginate'"
    :page-class="'vuejs-paginate-page'"
    :active-class="'vuejs-paginate-page-active'"
    :page-link-class="'vuejs-paginate-page-link'"
    :prev-class="'vuejs-paginate-prev'"
    :prev-link-class="'vuejs-paginate-prev-link'"
    :next-class="'vuejs-paginate-next'"
    :next-link-class="'vuejs-paginate-next-link'"
  >
  </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate';

export default {
  name: 'Pagination',
  components: {
    Paginate
  },
  data() {
    return {
      prev: `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="6 3 12 17">
          <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
        </svg>
      `,
      next: `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="6 3 12 17">
          <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
        </svg>
      `
    };
  },
  methods: {
    loadUsers() {
      // TO DO LOAD USERS
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

  .vuejs-paginate {
    height: 40px;
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;

    .vuejs-paginate-page {
      width: 40px;
      height: 40px;
      display: block;
      flex-shrink: 0;
      line-height: 40px;
      text-align: center;
      background-color: #fff;
      color: var(--widget-elems-color-3);
      font-size: 20px;
      font-weight: 500;
      border: 1px solid #f2f3f8;

      .vuejs-paginate-page-link {
        display: block;
      }
    }

    .vuejs-paginate-page-active {
      color: #5584ff;
    }

    .vuejs-paginate-prev,
    .vuejs-paginate-next {
      width: 40px;
      height: 40px;
      display: block;
      flex-shrink: 0;
      text-align: center;

      .vuejs-paginate-prev-link,
      .vuejs-paginate-next-link {
        width: 100%;
        height: 100%;
        display: block;

        svg {
          width: 80%;
          height: 80%;
          margin-top: 10%;
          fill: #5584ff;
        }
      }
    }
  }
</style>
