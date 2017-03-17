<template>
  <div>
    <Card :dis-hover="true">
      <div style="font-weight:700">操作提示：</div>
      <div> 1、执行录取前请确认考生各项考试科目的成绩已准确入库，另外同时已完成考生普通资格投档相关汇总成绩计算工作。</div>
      <div>2、执行录取前请确认各个招生专业的调剂优先顺序规则已进行准确设置。</div>
      <div>3、自动录取时，所有未锁定的录取结果数据将重新参与排序规则进行重新录取，已锁定的录取结果将保留。</div>
      <div>4、执行普通考生录取时，请确认已经确定完成特殊类型考生录取工作，未被录取的特殊考生将继续作为普通考生资格参与录取。</div>
    </Card>
  </div>
</template>
<script>
  export default {}
</script>
