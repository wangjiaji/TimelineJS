$(function () {
    var timeline = new VMM.Timeline('demo-timeline');
    timeline.init({
        type: 'timeline',
        source: example_json,
        width: '100%',
        embed_id: 'demo-timeline'
    });
});
