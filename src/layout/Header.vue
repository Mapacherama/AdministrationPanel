<template>
  <div class="grid">
    <div class="layout-topbar col-6">
      <button
        class="p-link layout-topbar-button"
        @click="visibleRight = !visibleRight"
      >
        <i class="pi pi-bars"></i>
        <span>SideBar</span>
      </button>
      <a href="https://cyso.group" class="layout-topbar-logo">
        <img src="../assets/image/logo_cysogroup_trsp.png" alt="logo" />
        <span>Cyso Group</span>
      </a>
      <Sidebar v-model:visible="visibleRight" position="right">
        <div class="flex-sidebar pt-4">
          <button
            @click="$router.push('/')"
            class="p-link layout-topbar-button mb-4"
          >
            <i class="pi pi-home"></i>
            <span> Home</span>
          </button>

          <button
            @click="$router.push('customers')"
            class="p-link layout-topbar-button mb-4"
          >
            <i class="pi pi-user"></i>
            <span> Customers</span>
          </button>

          <button class="p-link layout-topbar-button">
            <i class="pi pi-cog"></i>
            <span> Settings</span>
          </button>
        </div>
      </Sidebar>

      <button class="p-link layout-topbar-menu-button layout-topbar-button">
        <i class="pi pi-ellipsis-v"></i>
      </button>

      <div class="layout-topbar-menu">
        <button class="p-link layout-topbar-button">
          <i class="pi pi-home"></i>
          <span> Home</span>
        </button>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </button>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

export default {
  components: {
    Sidebar,
    Button,
  },
  data() {
    return {
      visibleRight: false,
      items: [
        {
          label: "Calendar",
          icon: "pi pi-calendar",
        },
        {
          label: "Customers",
          icon: "pi pi-user",
          to: "/customers",
        },
        {
          label: "Settings",
          icon: "pi pi-cog",
          to: "/settings",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-sidebar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  .pi {
    font-size: 2rem;
    color: var(--text-color);
  }
}

.list-item-cell {
  display: table-cell;
}

.list-item-cell:first-child {
  padding-right: 10px;
  width: 30px;
}
/* Topbar */
.layout-wrapper {
  min-height: 100vh;
}
.layout-topbar {
  position: fixed;
  height: 5rem;
  z-index: 997;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 2rem;
  background-color: var(--surface-card);
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.08);

  .layout-topbar-logo {
    display: flex;
    align-items: center;
    color: var(--surface-900);
    font-size: 1.5rem;
    font-weight: 500;
    width: 300px;
    border-radius: 12px;

    img {
      height: 2rem;
      margin-right: 0.5rem;
    }
  }

  .layout-topbar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: var(--text-color-secondary);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover {
      color: var(--text-color);
      background-color: var(--surface-hover);
    }

    i {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
      display: none;
    }
  }

  .layout-menu-button {
    margin-left: 2rem;
  }

  .layout-topbar-menu-button {
    display: none;

    i {
      font-size: 1.25rem;
    }
  }

  .layout-topbar-menu {
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
    display: flex;

    .layout-topbar-button {
      margin-left: 1rem;
    }
  }
}

.p-sidebar-content {
  margin: 0 0 0 auto;
  padding: 0;
  list-style: none;
  display: flex;

  .layout-topbar-button {
    margin-left: 1rem;
  }
}

@media (max-width: 991px) {
  .layout-topbar {
    justify-content: space-between;

    .layout-topbar-logo {
      width: auto;
      order: 2;
    }

    .layout-menu-button {
      margin-left: 0;
      order: 1;
    }

    .layout-topbar-menu-button {
      display: inline-flex;
      margin-left: 0;
      order: 3;
    }

    .layout-topbar-menu {
      margin-left: 0;
      position: absolute;
      flex-direction: column;
      background-color: var(--surface-overlay);
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02),
        0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);
      border-radius: 12px;
      padding: 1rem;
      right: 2rem;
      top: 5rem;
      min-width: 15rem;
      display: none;
      -webkit-animation: scalein 0.15s linear;
      animation: scalein 0.15s linear;

      &.layout-topbar-menu-mobile-active {
        display: block;
      }

      .layout-topbar-button {
        margin-left: 0;
        display: flex;
        width: 100%;
        height: auto;
        justify-content: flex-start;
        border-radius: 12px;
        padding: 1rem;

        i {
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        span {
          font-weight: medium;
          display: block;
        }
      }
    }
  }
}
</style>
