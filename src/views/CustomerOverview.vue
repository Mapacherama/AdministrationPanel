<template>
  <div class="grid mt-6">
    <h1>Customer overview</h1>
  </div>
  <div class="grid">
    <DataTable
      :value="customers"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <Column field="name" header="Name"></Column>
      <Column field="country.name" header="Country"></Column>
      <Column field="company" header="Company"></Column>
      <Column field="representative.name" header="Representative"></Column>
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import CustomerService from "./service/CustomerService";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

export default {
  components: {
    Button,
    Column,
    DataTable,
  },
  setup() {
    onMounted(() => {
      customerService.value
        .getCustomersLarge()
        .then((data) => (customers.value = data));
    });

    const customers = ref();
    const customerService = ref(new CustomerService());

    return { customers };
  },
};
</script>
