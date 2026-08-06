
import {ReflexEvent,applyEventActions,getRefValue,getRefValues,isTrue,refs} from "$/utils/state"
import {StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {jsx} from "@emotion/react"
import LucideBanknote from "lucide-react/dist/esm/icons/banknote.mjs"
import LucideArchive from "lucide-react/dist/esm/icons/archive.mjs"
import LucideCalendarClock from "lucide-react/dist/esm/icons/calendar-clock.mjs"
import LucideCalendarCheck from "lucide-react/dist/esm/icons/calendar-check.mjs"
import LucideBedDouble from "lucide-react/dist/esm/icons/bed-double.mjs"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import LucideArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs"
import {Link as ReactRouterLink} from "react-router"








export const Bare_comp_c46f14cb6e71ab10a2e3a4aaef7890bb_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["name"]
    )
});

export const Bare_comp_31ac2548ea9e1d4b40ea0ee34e320675_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["role"]
    )
});

export const Button_button_96d9950ca15b6ebcbc23a8b5e8b0e18a_b2031d52 = memo(({children}) => {
    const on_click_3a9fab123589010550296f6782c326a4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.logout", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_3a9fab123589010550296f6782c326a4},children)
    )
});

export const Bare_comp_efff69ab34ff0963207f9a67e60b2a7b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" occupied \u00b7 "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.resident_count_rx_state_+" residents")
    )
});

export const Bare_comp_459e70ec41e7ff78f7735d59d098001a_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_))
    )
});

export const Bare_comp_d0fb92c1044723a8051cdab57ea95abb_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.resident_count_rx_state_))
    )
});

export const Bare_comp_08a798fe1f15cb8ddc93ca6283ccd3ac_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("$"+(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.monthly_revenue_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ",")))
    )
});

export const Bare_comp_8d08744671e99bfc014185d5405697b1_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.attention_count_rx_state_))
    )
});

export const Bare_comp_69390e914743d44fcae4ac30b3ffda5e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(1)).replaceAll(',', ""))+"%")
    )
});

export const Div_div_475d6b00834d487059986edaa81ebfac_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("div",{className:"h-full rounded-full bg-violet-600 transition-all duration-500",css:({ ["width"] : (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_+"%") })},)
    )
});

export const Bare_comp_a97b38fd3c57c757e7f091c8bd999298_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" of "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.total_units_rx_state_+" units currently occupied")
    )
});

export const Button_button_2f5e987abc913e16900272ebc4b2355c_b2031d52 = memo(({children}) => {
    const on_click_b8bdb7f77c94c7d5e34e14236cba9c57 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_active_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700"),onClick:on_click_b8bdb7f77c94c7d5e34e14236cba9c57},children)
    )
});

export const Bare_comp_91b38013095bbb969475e7067993396f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("History ("+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+")")
    )
});

export const Button_button_53597ec6c50e5ba9ebe340af20615d3f_b2031d52 = memo(({children}) => {
    const on_click_ec6b96cafc4a992ae546eb4f07edaefd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_history_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "history"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700"),onClick:on_click_ec6b96cafc4a992ae546eb4f07edaefd},children)
    )
});

export const Button_button_75331050171188e371afd05b9fc73efb_b2031d52 = memo(({children}) => {
    const on_click_948993fdc69662f5b06d8671c936ab8d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_create", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto",onClick:on_click_948993fdc69662f5b06d8671c936ab8d},children)
    )
});

export const Button_button_6b8404ea6410d9fe2a5fe7bfe8870a75_b2031d52 = memo(({children}) => {
    const on_click_fe6156666ea6fc9cc3ed04cde1b03261 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_edit", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_fe6156666ea6fc9cc3ed04cde1b03261},children)
    )
});

export const Button_button_0e4c33385ba96ebd851215f174039ae0_b2031d52 = memo(({children}) => {
    const on_click_df1ca8d972bc84bc2ff1373b5f4bb427 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_df1ca8d972bc84bc2ff1373b5f4bb427},children)
    )
});

export const Button_button_56c7d03fa8b1814c7bfee3c148b67e59_b2031d52 = memo(({children}) => {
    const on_click_1d83a5f4bea02430ad50cba84a170d4c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_1d83a5f4bea02430ad50cba84a170d4c},children)
    )
});

export const Button_button_f6eda7513dab62f864fb11df09f92815_b2031d52 = memo(({children}) => {
    const on_click_3e4336b617c0ade691180635492441c9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_3e4336b617c0ade691180635492441c9},children)
    )
});

export const Bare_comp_0ff2e73b9cd6c87f8f4d023373e52b4f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_
    )
});

export const Bare_comp_a0ad374ac2263e150def46af3475a25d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" terminated record(s) preserved in history")
    )
});

export const Bare_comp_8f1c7a72dd8f2a483d2b286654c7ba0b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_
    )
});

export const Cond_comp_6406d568655e2970f0739f43bf7bdda9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_556149dea3a41342db33cf5cf7030391_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_
    )
});

export const Cond_comp_ba6f9134dfe72cb274091c7f53b3f55e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_7942116bdb4e7214f666dfcea088fab1_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_
    )
});

export const Cond_comp_1e8812aa59c0a923823969b53aae49d7_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_5d1f47b46e7211c8ca7a76af055ddb59_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Terminate contract for "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Foreach_comp_19a7183852242ebaa35f9f553532f3e6_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_reason_options_rx_state_ ?? [],((option_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:option_rx_state_},option_rx_state_))))
    )
});

export const Bare_comp_bd5283093dc697b774592fdfe6183e10_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_
    )
});

export const Cond_comp_1deb477a7b0cab6af48e05f0057cbeb7_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_c145ff7eaeb9c1fb75f446f888837489_b2031d52 = memo(({children}) => {
    const on_click_8ab3124f5b57d07234a77a77153cf925 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-100",onClick:on_click_8ab3124f5b57d07234a77a77153cf925,type:"button"},children)
    )
});

export const Form_form_b22afbbf23a9f5325f8f6b706b9d75e6_b2031d52 = memo(({children}) => {
    

    const handleSubmit_94822d2985db7034ce8f28fd79bef0d7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["termination_date"] : getRefValue(refs["ref_termination_date"]), ["termination_reason"] : getRefValue(refs["ref_termination_reason"]), ["termination_note"] : getRefValue(refs["ref_termination_note"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_terminate", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_94822d2985db7034ce8f28fd79bef0d7},children)
    )
});

export const Cond_comp_269ad7111749372c50d4658f2986da9f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_termination_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_3558450d46553f538424adc6d061a5dd_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Current lease ends "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"]+" \u00b7 "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"])
    )
});

export const Foreach_comp_cd0b4545456d6796b7e3ff4d1711ceeb_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_options_rx_state_ ?? [],((option_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:option_rx_state_},option_rx_state_))))
    )
});

export const Bare_comp_94ddf4faf90e48f3b1831e8875c961a9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_
    )
});

export const Cond_comp_31bc09d7abab3cc7993919b41444d50f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_e56177888e9a9a3cc4a01615339e4eea_b2031d52 = memo(({children}) => {
    const on_click_938c69fc7a0d2a104588614c6fe7c34f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-violet-200 bg-white px-3 py-2 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100",onClick:on_click_938c69fc7a0d2a104588614c6fe7c34f,type:"button"},children)
    )
});

export const Form_form_efed212e7c6ed550ab8f9fc0e192a5a7_b2031d52 = memo(({children}) => {
    

    const handleSubmit_f80afb386096bf616cc0f33859eba0a7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.extend_contract", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_f80afb386096bf616cc0f33859eba0a7},children)
    )
});

export const Cond_comp_13e6db3e01f3ef0d07e73fbaea99a506_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_extension_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_8fe2a94a6a9994aad8a09b7326d8604b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Remove "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Button_button_197bd36c6e5b40e761fb0dbb3343eda9_b2031d52 = memo(({children}) => {
    const on_click_bf9856396cb73ab750245028a166be2b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700",onClick:on_click_bf9856396cb73ab750245028a166be2b},children)
    )
});

export const Button_button_eef6a39c97635984040e224c587b4b0f_b2031d52 = memo(({children}) => {
    const on_click_becfc890260ecd34b3840e1525e27cca = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50",onClick:on_click_becfc890260ecd34b3840e1525e27cca},children)
    )
});

export const Cond_comp_402b6faaef8d7c95e5594a9e3a80cc51_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_delete_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_cd9e9422e6110f9c3c4cdc55356db0b9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_title_rx_state_
    )
});

export const Bare_comp_fbae70e865cbd6c3f9a2060e8009948a_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_subtitle_rx_state_
    )
});

export const Button_button_27e53deefcd858213d6e0a8ea41299f9_b2031d52 = memo(({children}) => {
    const on_click_c036a739b42aaeedafc86b97be40e963 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close record form",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_c036a739b42aaeedafc86b97be40e963,type:"button"},children)
    )
});

export const Input_input_a1358893350a3251660849564163cc60_b2031d52 = memo(({children}) => {
    const ref_record_room = useRef(null); refs["ref_record_room"] = ref_record_room;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["room"],id:"record-room",key:("room-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"room",placeholder:"204",ref:ref_record_room,type:"text"},)
    )
});

export const Bare_comp_5c8ccb68916e6262e371436065bf4711_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]
    )
});

export const Cond_comp_ec453ae55858b6293cdc5b74aecff9ea_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_690f905a2ce02acad7a7d8aae06b29ef_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.building_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_0f719e6d5e56a569c867953b9bee6608_b2031d52 = memo(({children}) => {
    const ref_record_building = useRef(null); refs["ref_record_building"] = ref_record_building;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["building"],id:"record-building",key:("building-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"building",ref:ref_record_building},children)
    )
});

export const Bare_comp_2ac971aac65eaba69ce76a2d176d7d2f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["building"]
    )
});

export const Cond_comp_adfbc786ad4d1d86dcb3a7237ebdf56c_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["building"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_44c36ffa8193bb4338bc0bec641eb82c_b2031d52 = memo(({children}) => {
    const ref_record_floor = useRef(null); refs["ref_record_floor"] = ref_record_floor;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["floor"],id:"record-floor",key:("floor-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"floor",placeholder:"2",ref:ref_record_floor,type:"number"},)
    )
});

export const Bare_comp_37401671ca581d103a640fe1a2396c81_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]
    )
});

export const Cond_comp_d3feff7bc5ced36a91ee6a910d1a1bdf_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_54ed362f088861c374176b5167191d8f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_type_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_0198b241924d3503ff51b4f16df8daa9_b2031d52 = memo(({children}) => {
    const ref_record_room_type = useRef(null); refs["ref_record_room_type"] = ref_record_room_type;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["room_type"],id:"record-room_type",key:("room_type-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"room_type",ref:ref_record_room_type},children)
    )
});

export const Bare_comp_902385a4eb43ad4df37395564cca98c9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room_type"]
    )
});

export const Cond_comp_198d940b008cb4682bd5cff5f98acc89_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room_type"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_f23d5e152069bee8ac51cd1e56d8faa0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.status_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_7394e61fcfe4e6c49dabc1a4606a64f6_b2031d52 = memo(({children}) => {
    const ref_record_status = useRef(null); refs["ref_record_status"] = ref_record_status;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["status"],id:"record-status",key:("status-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"status",ref:ref_record_status},children)
    )
});

export const Bare_comp_33727f076c08c59473b83ede7f34bab4_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["status"]
    )
});

export const Cond_comp_6670350480cfec47a11cef50d60cc1c6_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["status"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_e84a8b91d63b3f98898e5f9f74abe12c_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.lease_term_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_8414373a29c06e12ec0e1a56cdad3af1_b2031d52 = memo(({children}) => {
    const ref_record_lease_term = useRef(null); refs["ref_record_lease_term"] = ref_record_lease_term;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_term"],id:"record-lease_term",key:("lease_term-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_term",ref:ref_record_lease_term},children)
    )
});

export const Bare_comp_1483057df8335b6d4e21a0b535c8acb1_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_term"]
    )
});

export const Cond_comp_ffa869269a1a30b19cbcc84887f75396_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_term"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_e73c83d510de820ffa5b6a5aed3f9783_b2031d52 = memo(({children}) => {
    const ref_record_tenant = useRef(null); refs["ref_record_tenant"] = ref_record_tenant;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant"],id:"record-tenant",key:("tenant-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant",placeholder:"Jordan Rivera",ref:ref_record_tenant,type:"text"},)
    )
});

export const Bare_comp_b35728d02032303f64408a346f5ff4e2_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]
    )
});

export const Cond_comp_78d7f0460a057f689c1b02ce1a9a29e0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_f45f67c469c12d33edf50a0b0e9a784f_b2031d52 = memo(({children}) => {
    const ref_record_roommate = useRef(null); refs["ref_record_roommate"] = ref_record_roommate;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["roommate"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["roommate"],id:"record-roommate",key:("roommate-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"roommate",placeholder:"Sam Okafor",ref:ref_record_roommate,type:"text"},)
    )
});

export const Bare_comp_e477c59200d83c28da9dfc65af433315_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["roommate"]
    )
});

export const Cond_comp_70e291745c9420b148ae54d983d4ca64_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["roommate"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_2598cda21cba63cbc5841b2eb2192927_b2031d52 = memo(({children}) => {
    const ref_record_tenant_email = useRef(null); refs["ref_record_tenant_email"] = ref_record_tenant_email;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant_email"],id:"record-tenant_email",key:("tenant_email-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant_email",placeholder:"jordan.rivera@mail.com",ref:ref_record_tenant_email,type:"email"},)
    )
});

export const Bare_comp_40ee5f786e2cc4354676f72a2d3b7a7b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]
    )
});

export const Cond_comp_f496f4fa3000c8f8ca5b966f964059b6_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_6e2e59141efd0c22b46a7a141f5b705c_b2031d52 = memo(({children}) => {
    const ref_record_tenant_phone = useRef(null); refs["ref_record_tenant_phone"] = ref_record_tenant_phone;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant_phone"],id:"record-tenant_phone",key:("tenant_phone-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant_phone",placeholder:"+1 (415) 555-0142",ref:ref_record_tenant_phone,type:"tel"},)
    )
});

export const Bare_comp_f23b8432faa25b1d10e4653a67ac829c_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]
    )
});

export const Cond_comp_1d949abdd38627dfa123881d83e20209_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_a99ba0653fd4fd7e64c35c811d9226e1_b2031d52 = memo(({children}) => {
    const ref_record_occupants = useRef(null); refs["ref_record_occupants"] = ref_record_occupants;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["occupants"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["occupants"],id:"record-occupants",key:("occupants-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"occupants",placeholder:"1",ref:ref_record_occupants,type:"number"},)
    )
});

export const Bare_comp_27d60b1af11a9d5508a85d376a7fc833_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["occupants"]
    )
});

export const Cond_comp_9cedef4d90a12210eb497452854a8c82_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["occupants"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_24d3a5af5c2949e4137bee24e61909b5_b2031d52 = memo(({children}) => {
    const ref_record_capacity = useRef(null); refs["ref_record_capacity"] = ref_record_capacity;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["capacity"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["capacity"],id:"record-capacity",key:("capacity-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"capacity",placeholder:"2",ref:ref_record_capacity,type:"number"},)
    )
});

export const Bare_comp_46812b344160f8d9caaa9cbef40a0333_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["capacity"]
    )
});

export const Cond_comp_df659fe1f27650f876c25610855fb73c_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["capacity"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_7f9bc6bc582922c54656e4cdfc29aeb8_b2031d52 = memo(({children}) => {
    const ref_record_check_in = useRef(null); refs["ref_record_check_in"] = ref_record_check_in;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["check_in"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["check_in"],id:"record-check_in",key:("check_in-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"check_in",placeholder:"",ref:ref_record_check_in,type:"date"},)
    )
});

export const Bare_comp_effb6687168b0d90f01421d6b8a59bd6_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["check_in"]
    )
});

export const Cond_comp_ee5b222a032394081a5216053c2aaaca_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["check_in"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_e131fd6801ef16139f03547e1eb9332f_b2031d52 = memo(({children}) => {
    const ref_record_lease_start = useRef(null); refs["ref_record_lease_start"] = ref_record_lease_start;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_start"],id:"record-lease_start",key:("lease_start-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_start",placeholder:"",ref:ref_record_lease_start,type:"date"},)
    )
});

export const Bare_comp_11e14640297b2db6aa89e5d1335b764b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]
    )
});

export const Cond_comp_1d917c137eab3c78f891f90ea6e7f24d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_9ce3138708b686764d78560f873e2560_b2031d52 = memo(({children}) => {
    const ref_record_lease_end = useRef(null); refs["ref_record_lease_end"] = ref_record_lease_end;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_end"],id:"record-lease_end",key:("lease_end-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_end",placeholder:"",ref:ref_record_lease_end,type:"date"},)
    )
});

export const Bare_comp_a2982b8998047e804d910e0e5b13e445_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]
    )
});

export const Cond_comp_ec199225e2704b3942a4873a030eddd3_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_91b7403554dd7cdf6423f417d7de6fc3_b2031d52 = memo(({children}) => {
    const ref_record_next_payment = useRef(null); refs["ref_record_next_payment"] = ref_record_next_payment;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["next_payment"],id:"record-next_payment",key:("next_payment-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"next_payment",placeholder:"",ref:ref_record_next_payment,type:"date"},)
    )
});

export const Bare_comp_5ed3ad4f4f8a2bdde9a8100dfa0e12e0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]
    )
});

export const Cond_comp_6369176bef86e2fd1a6ca0fc491df13e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_7096c1fea3a59c46d43f9bb8e7894bde_b2031d52 = memo(({children}) => {
    const ref_record_rent = useRef(null); refs["ref_record_rent"] = ref_record_rent;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["rent"],id:"record-rent",key:("rent-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"rent",placeholder:"1450",ref:ref_record_rent,type:"number"},)
    )
});

export const Bare_comp_9124518c33fd9b3ae0a5c08e984c0873_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]
    )
});

export const Cond_comp_8b6e907eca6b1e76b7295e1f7368aba1_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_c87dd548ec15c8604f9fcb147a5a6a9e_b2031d52 = memo(({children}) => {
    const ref_record_deposit = useRef(null); refs["ref_record_deposit"] = ref_record_deposit;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["deposit"],id:"record-deposit",key:("deposit-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"deposit",placeholder:"2175",ref:ref_record_deposit,type:"number"},)
    )
});

export const Bare_comp_2e3e4e668dc61fce943752f2a86007b3_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]
    )
});

export const Cond_comp_3fb6871c1f9708bd8d46cc128ccf059d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_a7ee834dd17cbc539121fa9f61f8fef1_b2031d52 = memo(({children}) => {
    const ref_record_balance = useRef(null); refs["ref_record_balance"] = ref_record_balance;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["balance"],id:"record-balance",key:("balance-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"balance",placeholder:"0",ref:ref_record_balance,type:"number"},)
    )
});

export const Bare_comp_5fbc597c34956080e679385e53b7e175_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]
    )
});

export const Cond_comp_692ce668f9b3e0e1c36ac27c8526c444_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_317a3becde967b489c7d682efaa64961_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.payment_status_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_56c56a04bd197233f0e362d0e77a2af6_b2031d52 = memo(({children}) => {
    const ref_record_payment_status = useRef(null); refs["ref_record_payment_status"] = ref_record_payment_status;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["payment_status"],id:"record-payment_status",key:("payment_status-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"payment_status",ref:ref_record_payment_status},children)
    )
});

export const Bare_comp_218c63df486da13af924f577dd9d2a59_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["payment_status"]
    )
});

export const Cond_comp_29939e0110a3c357bd644fdc51235003_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["payment_status"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_260ceb9472ed3a57782b32eace097d9a_b2031d52 = memo(({children}) => {
    const ref_record_last_payment = useRef(null); refs["ref_record_last_payment"] = ref_record_last_payment;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["last_payment"],id:"record-last_payment",key:("last_payment-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"last_payment",placeholder:"",ref:ref_record_last_payment,type:"date"},)
    )
});

export const Bare_comp_c571c7406408b3b1e28eae931e448268_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]
    )
});

export const Cond_comp_f5d2b84eebe1eb10e8a0b7c5f86db44e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_56d17016c932c6d0a86184b4ef7ddc3c_b2031d52 = memo(({children}) => {
    const ref_record_emergency_name = useRef(null); refs["ref_record_emergency_name"] = ref_record_emergency_name;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_name"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["emergency_name"],id:"record-emergency_name",key:("emergency_name-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"emergency_name",placeholder:"Alex Rivera",ref:ref_record_emergency_name,type:"text"},)
    )
});

export const Bare_comp_840b4f37a3963c16a2bea5d9f4b29f18_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_name"]
    )
});

export const Cond_comp_10c4f8356463f97d51a47da0e55fcf04_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_name"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_6d0b12384be76bba194d23fb7ad279c7_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.relation_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_9cbea371cfca31246f5f381be97f8ee0_b2031d52 = memo(({children}) => {
    const ref_record_emergency_relation = useRef(null); refs["ref_record_emergency_relation"] = ref_record_emergency_relation;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["emergency_relation"],id:"record-emergency_relation",key:("emergency_relation-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"emergency_relation",ref:ref_record_emergency_relation},children)
    )
});

export const Bare_comp_93a5ebb32070fdba870d61f2748ffbe9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_relation"]
    )
});

export const Cond_comp_1be246f04b149e848e573225f647b4a9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_relation"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_c1bbce6fbd0883fda86bab203813ab05_b2031d52 = memo(({children}) => {
    const ref_record_emergency_phone = useRef(null); refs["ref_record_emergency_phone"] = ref_record_emergency_phone;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_phone"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["emergency_phone"],id:"record-emergency_phone",key:("emergency_phone-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"emergency_phone",placeholder:"+1 (628) 555-0199",ref:ref_record_emergency_phone,type:"tel"},)
    )
});

export const Bare_comp_fc76b8c3b7b4bc155ea6ebb8ceda2e2a_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_phone"]
    )
});

export const Cond_comp_6d908ea207d5f59e27dd918a944e1939_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["emergency_phone"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Textarea_textarea_42c5de8a313f64f04103bcdb42d75d46_b2031d52 = memo(({children}) => {
    const ref_record_notes = useRef(null); refs["ref_record_notes"] = ref_record_notes;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("textarea",{className:"mt-2 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["notes"],id:"record-notes",key:("notes-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"notes",placeholder:"Access instructions, maintenance preferences, roommate arrangements...",ref:ref_record_notes,rows:"3"},)
    )
});

export const Bare_comp_4050e6103b54c507fc0f4f8e61153019_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_
    )
});

export const Cond_comp_5b0b61ed5dfe9ddcabcf04838577a401_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_37b9eccb8c6921d31160498201799b72_b2031d52 = memo(({children}) => {
    const on_click_c036a739b42aaeedafc86b97be40e963 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50",onClick:on_click_c036a739b42aaeedafc86b97be40e963,type:"button"},children)
    )
});

export const Bare_comp_878d3c45159d9ffa72d66d9825c70b2d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.submit_label_rx_state_
    )
});

export const Form_form_2da1174b9d2d5f182a52840e325557d1_b2031d52 = memo(({children}) => {
    

    const handleSubmit_e7d76e60bf887ceb211bdb96d55b344a = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["record_room"] : getRefValue(refs["ref_record_room"]), ["record_building"] : getRefValue(refs["ref_record_building"]), ["record_floor"] : getRefValue(refs["ref_record_floor"]), ["record_room_type"] : getRefValue(refs["ref_record_room_type"]), ["record_status"] : getRefValue(refs["ref_record_status"]), ["record_lease_term"] : getRefValue(refs["ref_record_lease_term"]), ["record_tenant"] : getRefValue(refs["ref_record_tenant"]), ["record_roommate"] : getRefValue(refs["ref_record_roommate"]), ["record_tenant_email"] : getRefValue(refs["ref_record_tenant_email"]), ["record_tenant_phone"] : getRefValue(refs["ref_record_tenant_phone"]), ["record_occupants"] : getRefValue(refs["ref_record_occupants"]), ["record_capacity"] : getRefValue(refs["ref_record_capacity"]), ["record_check_in"] : getRefValue(refs["ref_record_check_in"]), ["record_lease_start"] : getRefValue(refs["ref_record_lease_start"]), ["record_lease_end"] : getRefValue(refs["ref_record_lease_end"]), ["record_next_payment"] : getRefValue(refs["ref_record_next_payment"]), ["record_rent"] : getRefValue(refs["ref_record_rent"]), ["record_deposit"] : getRefValue(refs["ref_record_deposit"]), ["record_balance"] : getRefValue(refs["ref_record_balance"]), ["record_payment_status"] : getRefValue(refs["ref_record_payment_status"]), ["record_last_payment"] : getRefValue(refs["ref_record_last_payment"]), ["record_emergency_name"] : getRefValue(refs["ref_record_emergency_name"]), ["record_emergency_relation"] : getRefValue(refs["ref_record_emergency_relation"]), ["record_emergency_phone"] : getRefValue(refs["ref_record_emergency_phone"]), ["record_notes"] : getRefValue(refs["ref_record_notes"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.submit_record", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"flex w-full flex-col",onSubmit:handleSubmit_e7d76e60bf887ceb211bdb96d55b344a},children)
    )
});

export const Cond_comp_66fce73dd361d7926023d72b71b9be8c_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.is_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_f0049d54eb01de72e1100dd3a1250e45_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.result_label_rx_state_
    )
});

export const Input_input_89f03278c34ce7a7dad08af4e11f5056_b2031d52 = memo(({children}) => {
    const on_change_c572f417c99c043e354363ed58b76c69 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_search", ({ ["value"] : _e?.["target"]?.["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.search_rx_state_,onChange:on_change_c572f417c99c043e354363ed58b76c69,placeholder:"Search room, tenant or building"},)
    )
});

export const Foreach_comp_ddebfb5f4f065937216873861a5f206b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.buildings_rx_state_ ?? [],((b_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:b_rx_state_},b_rx_state_))))
    )
});

export const Select_select_b58ee057b9db6b56487e7ea796d9e64c_b2031d52 = memo(({children}) => {
    const on_change_df718816601d26e981e78c992bbb95a2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_building", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",onChange:on_change_df718816601d26e981e78c992bbb95a2,value:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.building_filter_rx_state_},children)
    )
});

export const Button_button_233331b17c58dfe1feab20759985b75d_b2031d52 = memo(({children}) => {
    const on_click_e4a800d0ec143542fe681934b133ab7b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.refresh", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50 sm:w-auto",disabled:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_,onClick:on_click_e4a800d0ec143542fe681934b133ab7b},children)
    )
});

export const Foreach_comp_bc7ed0dbcda5cc76d0677639b0b8b0b7_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_a11d272e345ae0206655af59b2295c9b)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full cursor-pointer flex-col rounded-xl border-2 border-violet-500 bg-white p-5 text-left ring-2 ring-violet-100 transition-colors outline-hidden" : "flex w-full cursor-pointer flex-col rounded-xl border-2 border-gray-200 bg-white p-5 text-left transition-colors hover:border-violet-300 focus-visible:border-violet-500 outline-hidden"),key:index_a11d272e345ae0206655af59b2295c9b,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-start justify-between gap-3"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50"},jsx(LucideBedDouble,{className:"h-5 w-5 text-violet-600"},)),jsx("div",{className:"min-w-0"},jsx("p",{className:"text-base font-semibold tracking-tight text-gray-900"},("Room "+item_rx_state_?.["room"])),jsx("p",{className:"text-sm font-medium text-gray-500"},(item_rx_state_?.["building"]+" \u00b7 Floor "+item_rx_state_?.["floor"])))),jsx("span",{className:(() => { switch (JSON.stringify(item_rx_state_?.["status"])) {case JSON.stringify("Active"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Ending soon"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},item_rx_state_?.["status"])),jsx("div",{className:"mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3"},jsx("img",{className:"size-9 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+item_rx_state_?.["tenant_email"])},),jsx("div",{className:"min-w-0"},jsx("p",{className:"truncate text-sm font-semibold text-gray-900"},item_rx_state_?.["tenant"]),jsx("p",{className:"truncate text-xs font-medium text-gray-500"},(item_rx_state_?.["occupants"]+"/"+item_rx_state_?.["capacity"]+" occupants \u00b7 "+item_rx_state_?.["room_type"])))),jsx("div",{className:"mt-4 flex flex-col gap-2.5"},jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarCheck,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"Checked in")),jsx("span",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["check_in"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarClock,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"Lease ends")),jsx("span",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["lease_end"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideBanknote,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"Monthly rent")),jsx("span",{className:"text-sm font-semibold text-gray-900"},("$"+(item_rx_state_?.["rent"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ",")))))),jsx("div",{className:"mt-5 flex items-center justify-between border-t border-gray-100 pt-4"},jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-400"},"Occupied"),jsx("div",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex items-center gap-1.5 text-violet-600" : "flex items-center gap-1.5 text-gray-400")},jsx("span",{className:"text-sm font-semibold"},((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "Viewing tenant" : "View tenant")),jsx(LucideArrowRight,{className:"h-4 w-4"},)))))))
    )
});

export const Button_button_0bb46b2a5d0ada1c2b4c3b83b6a6d9b6_b2031d52 = memo(({children}) => {
    const on_click_99f0730d00d39960afe1e243d95f5f89 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_filters", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"mt-5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700",onClick:on_click_99f0730d00d39960afe1e243d95f5f89},children)
    )
});

export const Cond_comp_e05bc178d1057798d1194cd2fe1fc673_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_21616c71030a1a48893a52d7397cf2f0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_70ddbfb5a1fcb19ec972b4d71666e2ab_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "Selected" : "Empty")
    )
});

export const Span_span_536af231999fcf811b3fab38a6106119_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "w-fit rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700" : "w-fit rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-500")},children)
    )
});

export const Img_img_bb6a4cedf6ca53bd43bd9709ec14e695_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 shrink-0 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_46cf3d5c83722cf6dad60a9fa2e5880e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_c35c9de10c7d4d74103b6182fadf06dd_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Room "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["room"]+" \u00b7 "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["building"])
    )
});

export const Button_button_0a2988197e12d2b9e0b2b7f22fd4b1e3_b2031d52 = memo(({children}) => {
    const on_click_b06a71cc87153a47d80e0013231b57b9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close tenant details",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_b06a71cc87153a47d80e0013231b57b9},children)
    )
});

export const Bare_comp_dff410b7d55e06de8f19b9bdabd1a6bb_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"]
    )
});

export const Span_span_73e4b7c5fee84ed6b1ee60dc885eb8b3_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(() => { switch (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"])) {case JSON.stringify("Active"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Ending soon"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},children)
    )
});

export const Bare_comp_1e15c48a3180918a136ba21e89d4f0b9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_term"]
    )
});

export const Bare_comp_e741a48afb6f1875e2163f7cab289d7e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"]
    )
});

export const Reactrouterlink_link_c8bfb4b04b5342ec19be64856b89f1fa_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 transition-colors hover:border-violet-300 hover:text-violet-700",to:("mailto:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},children)
    )
});

export const Bare_comp_e42bf3a288fe7b90bb4fe9e4230e9c2d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"]
    )
});

export const Reactrouterlink_link_a51e777027eea84cef02c7c2bcf15902_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 transition-colors hover:border-violet-300 hover:text-violet-700",to:("tel:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"])},children)
    )
});

export const Foreach_comp_424a56ef1b8e79bcdebeadf397efed07_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["occupant_names"] ?? [],((name_rx_state_,index_a11d272e345ae0206655af59b2295c9b)=>(jsx("div",{className:"flex min-w-0 items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2 py-1",key:index_a11d272e345ae0206655af59b2295c9b},jsx("img",{className:"size-6 rounded-full bg-white",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+name_rx_state_)},),jsx("span",{className:"truncate text-sm font-semibold text-gray-900"},name_rx_state_)))))
    )
});

export const Bare_comp_0a172cefd08943dc1be4ca242b36b7f9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["occupants"]+" of "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["capacity"])
    )
});

export const Bare_comp_b2373ddd10141e8d7983d15e464e161d_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["room_type"]
    )
});

export const Bare_comp_76f57b43c5839427758b65daae205c0f_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["building"]+" \u00b7 Floor "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["floor"])
    )
});

export const Bare_comp_b1b96d6e081675fa6728cc4256088930_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["check_in"]
    )
});

export const Bare_comp_6bd6bbc2baa9932c2718e53cb57fc885_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_start"]
    )
});

export const Bare_comp_4f3cb363b1df6a641c4b465c8e57bedc_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"]
    )
});

export const Bare_comp_8b4aac8b20d417df786ea9d691ee9f90_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("$"+(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["deposit"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ",")))
    )
});

export const Bare_comp_23b7576d08830ceee4c30096791120b2_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["payment_status"]
    )
});

export const Span_span_746f4a78394a17c87c9daa0c92afd6d1_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(() => { switch (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["payment_status"])) {case JSON.stringify("Paid"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Due"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},children)
    )
});

export const Bare_comp_d869e6e4c03b82698adcbc9191868ea5_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("$"+(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["rent"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ",")))
    )
});

export const Bare_comp_c518770cf253e6e0f4eae34c11c751da_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("$"+(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["balance"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(2)).replaceAll(',', ",")))
    )
});

export const Bare_comp_ec3907fee9eb00a74db2b811a8335407_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["last_payment"]
    )
});

export const Bare_comp_cb04c0a4269069b5ed16b5295827aea0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["next_payment"]
    )
});

export const Bare_comp_38744deeaaa843eae07d9fc11461ac2e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Lease extended through "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"])
    )
});

export const Img_img_b95b8bcd197c7ad7a5827c11abe09ca0_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-9 rounded-full bg-white",src:("https://api.dicebear.com/9.x/initials/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["emergency_name"])},)
    )
});

export const Bare_comp_ce895b3768ca51e0634227fb649ddc3b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["emergency_name"]
    )
});

export const Bare_comp_0bad727fc32dd07c91b065b6b74c36f2_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["emergency_relation"]
    )
});

export const Bare_comp_d964752f4c46d073b053a4a815b8667e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["emergency_phone"]
    )
});

export const Reactrouterlink_link_00aafc8ed8f4b9ffe8276ff98eafcac9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"mt-3 flex w-fit items-center gap-2 text-gray-700 transition-colors hover:text-violet-700",to:("tel:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["emergency_phone"])},children)
    )
});

export const Bare_comp_e4c139f064afea43e564e755162b4589_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["notes"]
    )
});

export const Bare_comp_4fee1e22878bdbad9c5cd52d8077ebae_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" occupied rooms available")
    )
});

export const Cond_comp_5042ca0cd8dd7b5dd2ef84c95b44ac39_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_e535ed073c86626bb9d9eff3cf9e200a_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" preserved record(s), hidden from active occupancy.")
    )
});

export const Input_input_44522238c5a7805e9afbe16c3d6d650a_b2031d52 = memo(({children}) => {
    const on_change_fb80fc2afde123030374172f753576f1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_history_search", ({ ["value"] : _e?.["target"]?.["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_search_rx_state_,onChange:on_change_fb80fc2afde123030374172f753576f1,placeholder:"Search room, building, tenant or reason"},)
    )
});

export const Foreach_comp_4c041f1a1396224fdd58da60c0fdcdbf_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_26544980529247b81e2f025e4500ba4c)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full flex-col rounded-xl border-2 border-violet-500 bg-white p-5 text-left ring-2 ring-violet-100" : "flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 text-left transition-colors hover:border-violet-300"),key:index_26544980529247b81e2f025e4500ba4c,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_history_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50"},jsx(LucideArchive,{className:"h-5 w-5 text-amber-600"},)),jsx("div",{className:"min-w-0 text-left"},jsx("p",{className:"text-base font-semibold text-gray-900"},("Room "+item_rx_state_?.["room"])),jsx("p",{className:"text-sm font-medium text-gray-500"},(item_rx_state_?.["building"]+" \u00b7 "+item_rx_state_?.["tenant"])))),jsx("div",{className:"mt-4 border-t border-gray-100 pt-4"},jsx("span",{className:"w-fit rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700"},"Terminated"),jsx("p",{className:"mt-3 text-left text-xs font-medium text-gray-500"},(item_rx_state_?.["termination_date"]+" \u00b7 "+item_rx_state_?.["termination_reason"])))))))
    )
});

export const Button_button_02571cb39937e4ca3bf3182e289d3f98_b2031d52 = memo(({children}) => {
    const on_click_26d9096e9b14bc07f64fbd3394d2475e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_history_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close past tenant details",className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",onClick:on_click_26d9096e9b14bc07f64fbd3394d2475e},children)
    )
});

export const Img_img_9538d93bb53399b99b122eac2167a883_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_2ff5c5fc8663723e6a610b7395f57f06_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_abcbe245de713fbb6fe6bd81f4e2ee04_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Room "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["room"]+" \u00b7 "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["building"])
    )
});

export const Bare_comp_bfdc093783570448095c9c45626a111b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Ended "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["termination_date"])
    )
});

export const Bare_comp_941070101a256baa29ed0e2d2dfda3f5_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Reason: "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["termination_reason"])
    )
});

export const Bare_comp_a90d934adce1eb5744da67e08a100af9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"]
    )
});

export const Bare_comp_d5205b3796da68ad5ddc80ede50dcf13_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_phone"]
    )
});

export const Bare_comp_6fbd906d275ba073b3a39728c59265e2_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["notes"]
    )
});

export const Cond_comp_b51d3be85960ce4bc8a84381c873fcd4_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_dc9e959c26533ecd70ef71d5b4b6a4d6_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_a89c58e305e6d8c7e45754f39ab0955a_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_
    )
});

export const Cond_comp_abe83c43c26dc8084f2a3e5ccff421a9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_b93b10d12575fb560525842ed4e4ec10_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.admin_users_rx_state_ ?? [],((item_rx_state_,index_99ae251a64739767aa046e7a9f5f9757)=>(jsx("tr",{className:"border-t border-gray-100 hover:bg-gray-50/70",key:index_99ae251a64739767aa046e7a9f5f9757},jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("div",{className:"min-w-48"},jsx("p",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["name"]),jsx("p",{className:"mt-0.5 text-xs font-medium text-gray-500"},item_rx_state_?.["email"]),jsx(Fragment,{},((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.())?(jsx(Fragment,{},jsx("span",{className:"mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-700"},"Current user"))):(jsx(Fragment,{},jsx("div",{},))))))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:"text-sm font-medium text-gray-700"},item_rx_state_?.["role"])),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:(item_rx_state_?.["active"] ? "w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700" : "w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600")},(item_rx_state_?.["active"] ? "Active" : "Disabled"))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("button",{className:"flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50",disabled:(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.()),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.toggle_user_access", ({ ["email"] : item_rx_state_?.["email"] }), ({  })))], [_e], ({  }))))},jsx(DynamicIcon,{className:"h-4 w-4",name:(item_rx_state_?.["active"] ? "user-round-x" : "user-round-check").replaceAll("_", "-")},),jsx("span",{},(item_rx_state_?.["active"] ? "Disable access" : "Enable access"))))))))
    )
});

export const Bare_comp_db9bf78c68c1298e92298110718067d9_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_
    )
});

export const Cond_comp_9dd2bd436db637b751411e9a2b6c8db4_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_193b52e6f6a35071e4583623f3c59e50_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_
    )
});

export const Cond_comp_334c3ec45b2f3f6e3c6d15df6eb7197e_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_4000879c87472fb3d034bbacfdceec30_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_
    )
});

export const Cond_comp_453011aa84691974a4caaa353d8e20ad_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_3527179af502073a28961874c019e899_b2031d52 = memo(({children}) => {
    

    const handleSubmit_cadee948c5f12cc0057d1fc57f15145c = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.sign_in", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-6 flex flex-col gap-4",onSubmit:handleSubmit_cadee948c5f12cc0057d1fc57f15145c},children)
    )
});

export const Cond_comp_5a228647c45269207aa7fe035f6b263b_b2031d52 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.is_authenticated_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
