<template>
  <div class="form__group field">
    <input
      type="input"
      class="form__field"
      placeholder="placeholder"
      name="name"
      id="field_{{label}}"
      required
      :value="value"
      @change="onChange"
    />
    <label for="field_{{label}}" class="form__label">{{label}}</label>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// interface Props {
//   placeholder: string;
//   name: string;
//   onChange: (event: InputEvent) => void;
// }
export default defineComponent({
  name: "InputField",
  props:{
    label: {
      required: true,
      type:String
    },
    value: {
      required: true,
      type:String
    },
    placeholder: {
      required: true,
      type:String
    },
    onChange: {
      required: true,
      type:Function
    },
  } ,
});
</script>
<style scoped>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #000000ff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  box-shadow: -25px 120px 0px 0px rgba(0 0 0 / 50%);
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-family: initial;
  font-size: large;
  color: #000000ff;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #ff7500, #000000ff);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #ff7500;
  font-weight: 700;
}

.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
</style>