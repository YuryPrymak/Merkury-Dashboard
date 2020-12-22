<template>
  <div class="wrapper">
    <div class="header">
      <p class="label">Users <span class="quantity">({{ totalUsers }})</span></p>
      <input
        type="text"
        class="search-user"
        placeholder="Find User"
        maxlength="30"
        autocomplete="off"
      >
    </div>
    <table class="users">
      <tr>
        <th>Name</th>
        <th>Last activity</th>
        <th>Mail</th>
        <th>Phone</th>
      </tr>
      <tr
        v-for="user in users"
        :key="user.id"
      >
        <td class="user-name">
          <div class="photo" :class="{'online': user.online}">
            <img :src="require(`@/assets/img/${user.userPhoto}`)" alt="Person">
          </div>
          {{ user.userName }}
        </td>
        <td class="status" :class="{ 'status-online': user.online }">
          <span class="icon-time">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M27.5 55c-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5v0c15.188 0 27.5 12.312 27.5 27.5s-12.312 27.5-27.5 27.5v0zM27.5 49.5c12.15 0 22-9.85 22-22s-9.85-22-22-22v0c-12.15 0-22 9.85-22 22s9.85 22 22 22v0zM24.75 28.627v-17.627h5.5v15.373l10.863 10.863-3.878 3.878-12.485-12.485z"></path>
            </svg>
          </span>
          {{ user.time }}
        </td>
        <td class="mail">{{ user.email }}</td>
        <td class="phone">{{ user.phone }}</td>
      </tr>
    </table>
    <pagination class="pagination">
    </pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Users',
  components: {
    Pagination
  },
  computed: {
    ...mapGetters('users', { users: 'users' }),
    ...mapGetters('users', { totalUsers: 'totalUsers' })
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .wrapper {
    padding: 40px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        color: var(--widget-elems-color-3);
        font-size: 36px;
        font-weight: 500;

        .quantity {
          color: var(--widget-elems-color);
        }
      }

      .search-user {
        width: 300px;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #dadee7;
        border-radius: 5px;
        color: var(--widget-elems-color-3);
        font-size: 18px;
        line-height: 40px;

        &::placeholder {
          color: #d8d1d1;
        }
      }
    }

    .users {
      width: 100%;
      border-collapse: collapse;

      th {
        padding: 20px 35px;
        color: var(--widget-elems-color);
        text-align: left;
        font-size: 20px;
        font-weight: 400;
      }

      td {
        height: 120px;
        padding: 0 30px;
        border: 1px solid #dadee7;
        background-color: #fff;
      }

      .user-name {
        display: flex;
        align-items: center;
        color: var(--widget-elems-color-3);
        font-size: 20px;
        font-weight: 500;

        .photo {
          width: 70px;
          height: 70px;
          position: relative;
          margin-right: 25px;
          flex-shrink: 0;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .online {
          &::after {
            content: '';
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #00bf1b;
            border: 4px solid #fff;
            border-radius: 50%;
            box-sizing: border-box;
          }
        }
      }

      .status {
        position: relative;
        padding-left: 70px;
        color: var(--widget-elems-color);
        font-size: 20px;
        font-weight: 500;

        .icon-time {
          display: block;
          width: 24px;
          height: 24px;
          position: absolute;
          top: calc(50% - 12px);
          left: 35px;

          svg {
            width: 100%;
            height: 100%;
            fill: var(--widget-elems-color);
          }
        }
      }

      .status-online {
        color: #00bf1b;

        .icon-time {
          svg {
            fill: #00bf1b;
          }
        }
      }

      .mail,
      .phone {
        color: var(--widget-elems-color-3);
        font-size: 20px;
        font-weight: 500;
      }
    }

    .pagination {
      margin-top: 50px;
    }
  }
</style>
