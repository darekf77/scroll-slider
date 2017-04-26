/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './slider.component.scss.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../src/slider/slider.component';
import * as import3 from '@angular/common';
import * as import4 from '../../../src/slider/arrow.directive';
const styles_SliderComponent:any[] = [import0.styles];
export const RenderType_SliderComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_SliderComponent,
  data: {}
}
);
export function View_SliderComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(2,[
    import1.ɵqud(201326592,1,{wrapper: 0}),
    import1.ɵqud(201326592,2,{container: 0}),
    import1.ɵqud(335544320,3,{arrows: 1}),
      (l()(),import1.ɵeld(0,(null as any),(null as any),22,'div',[[
        'class',
        'nav-buttons'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),19,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'arrow',
        ''
      ]
      ,
      [
        'class',
        'arrow left'
      ]

    ]
    ,[
      [
        4,
        'height',
        'px'
      ]
      ,
      [
        4,
        'lineHeight',
        'px'
      ]

    ]
    ,[
      [
        (null as any),
        'mousedown'
      ]
      ,
      [
        (null as any),
        'mouseup'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.SliderComponent = v.component;
      if (('mousedown' === en)) {
        const pd_0:any = ((<any>co.onMouseDown($event,'left')) !== false);
        ad = (pd_0 && ad);
      }
      if (('mouseup' === en)) {
        const pd_1:any = ((<any>co.onMouseUp($event)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import3.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import1.ɵpod(['normalOpacity']),
      import1.ɵdid(40960,[[
        3,
        4
      ]
    ],0,import4.ArrowDirective,[
      import1.ElementRef,
      import1.Renderer
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'fa fa-arrow-left'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[' <  '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'arrow',
        ''
      ]
      ,
      [
        'class',
        'arrow right'
      ]

    ]
    ,[
      [
        4,
        'height',
        'px'
      ]
      ,
      [
        4,
        'lineHeight',
        'px'
      ]

    ]
    ,[
      [
        (null as any),
        'mousedown'
      ]
      ,
      [
        (null as any),
        'mouseup'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.SliderComponent = v.component;
      if (('mousedown' === en)) {
        const pd_0:any = ((<any>co.onMouseDown($event,'right')) !== false);
        ad = (pd_0 && ad);
      }
      if (('mouseup' === en)) {
        const pd_1:any = ((<any>co.onMouseUp($event)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import3.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import1.ɵpod(['normalOpacity']),
      import1.ɵdid(40960,[[
        3,
        4
      ]
    ],0,import4.ArrowDirective,[
      import1.ElementRef,
      import1.Renderer
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'fa fa-arrow-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[' >  '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,[
      [
        2,
        0
      ]
      ,
      [
        'container',
        1
      ]

    ]
      ,(null as any),6,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'wrapper',
        1
      ]

    ]
      ,(null as any),3,'div',[[
        'class',
        'items-wrapper'
      ]
    ],(null as any),[
      [
        (null as any),
        'DOMMouseScroll'
      ]
      ,
      [
        (null as any),
        'mousewheel'
      ]
      ,
      [
        (null as any),
        'touchstart'
      ]
      ,
      [
        (null as any),
        'touchend'
      ]
      ,
      [
        (null as any),
        'touchmove'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.SliderComponent = v.component;
      if (('DOMMouseScroll' === en)) {
        const pd_0:any = ((<any>co.onMouseWheelFirefox($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('mousewheel' === en)) {
        const pd_1:any = ((<any>co.onMouseWheel($event)) !== false);
        ad = (pd_1 && ad);
      }
      if (('touchstart' === en)) {
        const pd_2:any = ((<any>co.onTouchStart($event)) !== false);
        ad = (pd_2 && ad);
      }
      if (('touchend' === en)) {
        const pd_3:any = ((<any>co.onTouchEnd($event)) !== false);
        ad = (pd_3 && ad);
      }
      if (('touchmove' === en)) {
        const pd_4:any = ((<any>co.onTouchMove($event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    import1.ɵncd((null as any),0),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n\n'])),
    (l()(),import1.ɵted((null as any),['\n\n']))
  ]
  ,(ck,v) => {
    var co:import2.SliderComponent = v.component;
    const currVal_2:any = 'arrow left';
    const currVal_3:any = ck(v,9,0,co.slider.arrow.left.isVisible());
    ck(v,8,0,currVal_2,currVal_3);
    ck(v,10,0);
    const currVal_6:any = 'arrow right';
    const currVal_7:any = ck(v,18,0,co.slider.arrow.right.isVisible());
    ck(v,17,0,currVal_6,currVal_7);
    ck(v,19,0);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,10).height;
    const currVal_1:any = import1.ɵnov(v,10).lineHeight;
    ck(v,7,0,currVal_0,currVal_1);
    const currVal_4:any = import1.ɵnov(v,19).height;
    const currVal_5:any = import1.ɵnov(v,19).lineHeight;
    ck(v,16,0,currVal_4,currVal_5);
  });
}
function View_SliderComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),2,'scroll-slider',([] as any[]),[[
        4,
        'height',
        'px'
      ]
    ],(null as any),(null as any),View_SliderComponent_0,RenderType_SliderComponent)),
    import1.ɵdid(2678784,(null as any),1,import2.SliderComponent,[
      import1.Renderer,
      import1.ChangeDetectorRef,
      import1.NgZone
    ]
    ,(null as any),(null as any)),
    import1.ɵqud(301989888,1,{children: 1})
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,1).height;
    ck(v,0,0,currVal_0);
  });
}
export const SliderComponentNgFactory:import1.ComponentFactory<import2.SliderComponent> = import1.ɵccf('scroll-slider',import2.SliderComponent,View_SliderComponent_Host_0,{},{},['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2RhcmVrL1Byb2plY3RzTWFjL25wbS9uZzItc2Nyb2xsLXNsaWRlci9zcmMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvZGFyZWsvUHJvamVjdHNNYWMvbnBtL25nMi1zY3JvbGwtc2xpZGVyL3NyYy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2RhcmVrL1Byb2plY3RzTWFjL25wbS9uZzItc2Nyb2xsLXNsaWRlci9zcmMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2RhcmVrL1Byb2plY3RzTWFjL25wbS9uZzItc2Nyb2xsLXNsaWRlci9zcmMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMuU2xpZGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cIm5hdi1idXR0b25zXCI+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IGxlZnRcIiBhcnJvdyBbbmdDbGFzc109XCJ7J25vcm1hbE9wYWNpdHknOiBzbGlkZXIuYXJyb3cubGVmdC5pc1Zpc2libGUoKX1cIiBcbiAgICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQsJ2xlZnQnKVwiIChtb3VzZXVwKT1cIm9uTW91c2VVcCgkZXZlbnQpXCIgPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj4gJmx0OyAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFycm93IHJpZ2h0XCIgYXJyb3cgW25nQ2xhc3NdPVwieydub3JtYWxPcGFjaXR5Jzogc2xpZGVyLmFycm93LnJpZ2h0LmlzVmlzaWJsZSgpfVwiIFxuICAgICAgICAobW91c2Vkb3duKT1cIm9uTW91c2VEb3duKCRldmVudCwncmlnaHQnKVwiIChtb3VzZXVwKT1cIm9uTW91c2VVcCgkZXZlbnQpXCIgPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LXJpZ2h0XCI+ICZndDsgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiAjY29udGFpbmVyID5cbiAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtd3JhcHBlclwiICN3cmFwcGVyXG4gICAgICAgIChET01Nb3VzZVNjcm9sbCk9XCJvbk1vdXNlV2hlZWxGaXJlZm94KCRldmVudClcIlxuICAgICAgICAobW91c2V3aGVlbCk9XCJvbk1vdXNlV2hlZWwoJGV2ZW50KVwiXG4gICAgICAgICh0b3VjaHN0YXJ0KT1cIm9uVG91Y2hTdGFydCgkZXZlbnQpXCJcbiAgICAgICAgKHRvdWNoZW5kKT1cIm9uVG91Y2hFbmQoJGV2ZW50KVwiXG4gICAgICAgICh0b3VjaG1vdmUpPVwib25Ub3VjaE1vdmUoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG4iLCI8c2Nyb2xsLXNsaWRlcj48L3Njcm9sbC1zbGlkZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7SUFDckI7SUFBSztJQUNEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQUF5QztRQUFBO1FBQUE7TUFBQTtNQUR6QztJQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUE4QjtrQkFBOUI7UUFBQTtRQUFBO01BQUE7SUFBQTs7O0lBQUE7S0FBQTtJQUN3RTtNQUVwRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStCO0lBQWM7SUFDM0M7SUFDTjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQ0E7UUFBQTtRQUFBO01BQUE7TUFBMEM7UUFBQTtRQUFBO01BQUE7TUFEMUM7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBK0I7a0JBQS9CO1FBQUE7UUFBQTtNQUFBO0lBQUE7OztJQUFBO0tBQUE7SUFDeUU7TUFFckU7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnQztJQUFjO0lBQzVDO0lBQ0o7SUFDSjtJQUNOO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1DO0lBQy9CO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFDSTtRQUFBO1FBQUE7TUFBQTtNQUNBO1FBQUE7UUFBQTtNQUFBO01BQ0E7UUFBQTtRQUFBO01BQUE7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQUNBO1FBQUE7UUFBQTtNQUFBO01BTEo7SUFBQTtJQU1DO2dCQUNHO0lBQXlCO0lBQ3ZCO0lBRUo7Ozs7SUF2Qk87SUFBeUI7SUFBOUIsU0FBSyxVQUF5QixTQUE5QjtJQUFBO0lBS0s7SUFBMEI7SUFBL0IsVUFBSyxVQUEwQixTQUEvQjtJQUFBOztJQUxBO0lBQUE7SUFBQSxTQUFBLG1CQUFBO0lBS0E7SUFBQTtJQUFBLFVBQUEsbUJBQUE7Ozs7O01DUFI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtnQkFBQTs7O0lBQUE7O0lBQUE7SUFBQSxTQUFBLFNBQUE7OzsifQ==
