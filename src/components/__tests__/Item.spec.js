import Item from '../Item.vue'
import Vue from 'vue'

describe('Item.vue', () => { // grp tests
  test('renders "item"', () => { // test name & function to test
    const Ctor = Vue.extend(Item) // create Vue constructor
    const vm = new Ctor().$mount() // create instance
    expect(vm.$el.textContent).toContain('item')
  })
})