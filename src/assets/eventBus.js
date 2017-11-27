function broadcast (componentName, eventName, params) {
  // 遍历所有子组件
  this.$children.forEach(child => {
    const name = child.$options.name;
    // 寻找符合名称的子组件
    if (name === componentName) {
      // 在符合名称的子组件上触发事件，但不会继续寻找符合名称的子组件的子集
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // 不符合继续寻找它的子集（即子孙组件）
      // todo 如果 params 是空数组，接收到的会是 undefined
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      // 寻找父级，如果父级不是符合的组件名则继续向上寻找
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // 找到符合组件名称的父级后，触发其事件
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
