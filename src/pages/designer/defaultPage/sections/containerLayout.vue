<template>
  <div>
    <Row v-for="(index1, row) in rows" :class="row.class" :style="row.style" v-show="!row.hidden">
      <i-col :span="col.span" v-for="(index2, col) in row.cols" v-show="!col.hidden"
             @click="select(col)">
        <div :style="col.style" class="designer-col {{col == ps.selectedSection?'designer-col-selected':''}}">
          <div class="item-del">
            <Icon type="ios-arrow-up" @click="up(rows, index1)"></Icon>
            &nbsp;
            <Icon type="ios-arrow-down" @click="down(rows, index1)"></Icon>
            &nbsp;
            <Icon type="plus-round" @click="addCol(row.cols)"></Icon>
            &nbsp;
            <Icon type="android-delete" @click="del(row.cols, index2)"></Icon>
          </div>
          <div v-if="col.component">
            <component :is="col.component" class="{{col.name?('comp-name-'+col.name):''}}" :mock="mock"></component>
          </div>
          <div v-else>
            <content-component class="{{col.name?('comp-name-'+col.name):''}}" :mock="mock"
                               :content="col.content"></content-component>
          </div>
          <div v-if="col.rows">
            <container-layout :rows="col.rows" :mock="mock"></container-layout>
          </div>
          <div v-if="!col.content &&　!col.component && !col.rows">
            <div style="font-size:14px;text-align:center;height:36px;line-height:36px;font-weight: 400;">空</div>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import contentComponent from './contentComponent.vue'

  export default {
    components: {contentComponent},
    props: {rows: Array, mock: {type: Boolean, default: false}},
    name: 'containerLayout',

    computed: {
      ps(){
        return this.$store.state.index
      },
    },

    methods: {
      select(col){
        Ubase.invoke('defaultPage.selectSection', col)
      },

      del(cols, index){
        cols = cols.splice(index)
      },

      up(cols, index){

        if (index == 0) {
          return
        }

        var temp = cols[index]

        cols.$set(index, cols[index - 1])
        cols.$set(index-1, temp)
      },

      down(cols, index){

        if (index == cols.length -1) {
          return
        }

        var temp = cols[index]

        cols.$set(index, cols[index + 1])
        cols.$set(index+1, temp)
      },

      addCol(cols){
          cols.push({name:'',component:'', style:{}, span:24})
      }
    }
  }
</script>
<style>
  .designer-col{
    position: relative;
  }

  .designer-col:hover {
    border: 1px dashed #5cadff;
  }

  .designer-col-selected {
    border: 1px dashed #5cadff;
  }

  .item-del {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 10000;
    font-size: 18px;
    display: none;
  }

  .item-del > i {
    cursor: pointer;
  }

  .designer-col:hover .item-del {
    display: block;
  }
</style>
