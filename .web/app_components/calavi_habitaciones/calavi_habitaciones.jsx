
import {ReflexEvent,applyEventActions,getRefValue,getRefValues,isTrue,refs} from "$/utils/state"
import {StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {jsx} from "@emotion/react"
import LucideBanknote from "lucide-react/dist/esm/icons/banknote.mjs"
import LucideArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs"
import LucideBedDouble from "lucide-react/dist/esm/icons/bed-double.mjs"
import LucideCalendarClock from "lucide-react/dist/esm/icons/calendar-clock.mjs"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import LucideCalendarCheck from "lucide-react/dist/esm/icons/calendar-check.mjs"
import LucideArchive from "lucide-react/dist/esm/icons/archive.mjs"
import {Link as ReactRouterLink} from "react-router"








export const Bare_comp_685488971d8653da4708bec675486635_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["name"]
    )
});

export const Bare_comp_df0c08eb96d32ede689f6eaf2fe1b2d9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["role"]
    )
});

export const Button_button_51b289045fe8b5443a053eb121c1e5ca_81e687a6 = memo(({children}) => {
    const on_click_b3969c7f6e8551dfd4600bcc9287dbd3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.logout", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_b3969c7f6e8551dfd4600bcc9287dbd3},children)
    )
});

export const Bare_comp_488315d0cca00fb1a8a515e1b403df9b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" ocupadas")
    )
});

export const Bare_comp_1bad7f8a8f8c339fb91814512f23155d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_))
    )
});

export const Bare_comp_964cc2f69dbfab14e35b52b29b6a374e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.monthly_revenue_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ","))+"\u20ac")
    )
});

export const Bare_comp_77bfd731c82a061b51066830280b4155_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.attention_count_rx_state_))
    )
});

export const Bare_comp_75f69a355e6aff418b0a20b78dfafa0d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(1)).replaceAll(',', ""))+"%")
    )
});

export const Div_div_9158b6dded80dd5c2adb6c0b6e1a6421_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("div",{className:"h-full rounded-full bg-violet-600 transition-all duration-500",css:({ ["width"] : (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_+"%") })},)
    )
});

export const Bare_comp_c7d1bc5d520946c3f85de8151f0c9bce_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" de "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.total_units_rx_state_+" unidades alquiladas actualmente ")
    )
});

export const Button_button_be40fc5562803b3c34effd1b186f5e39_81e687a6 = memo(({children}) => {
    const on_click_84b720c2064447ab93d591a23a5e1a98 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_active_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700"),onClick:on_click_84b720c2064447ab93d591a23a5e1a98},children)
    )
});

export const Bare_comp_cf43961435fcbc62921dfd3c65c18c6d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Hist\u00f3rico ("+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+")")
    )
});

export const Button_button_b76371ccfad431f2d82c1261e448c496_81e687a6 = memo(({children}) => {
    const on_click_5093cf4b1a459cbcc90d92340e1c2fa0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_history_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "history"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700"),onClick:on_click_5093cf4b1a459cbcc90d92340e1c2fa0},children)
    )
});

export const Button_button_277c349714f2c1cf5f2653523043dbe5_81e687a6 = memo(({children}) => {
    const on_click_6afa99742e7befc5abce3ca6f11da450 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_create", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto",onClick:on_click_6afa99742e7befc5abce3ca6f11da450},children)
    )
});

export const Button_button_5cbf6e07108e68c73cdd7a9838621ee8_81e687a6 = memo(({children}) => {
    const on_click_949ad33bde13c4b3be9e2daef554abbf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_edit", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_949ad33bde13c4b3be9e2daef554abbf},children)
    )
});

export const Button_button_34709768a18e782b274b6c7a1c665da1_81e687a6 = memo(({children}) => {
    const on_click_addd7fabc9da4f618f6ef8662817eb96 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_addd7fabc9da4f618f6ef8662817eb96},children)
    )
});

export const Button_button_33c7f0368a8c2b8644a0b93b9a1f45dc_81e687a6 = memo(({children}) => {
    const on_click_627a8928fbe78f1f15457a861adeb8d9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_627a8928fbe78f1f15457a861adeb8d9},children)
    )
});

export const Button_button_895b61f8c958e79bf3014660878164d0_81e687a6 = memo(({children}) => {
    const on_click_8e6f93315d25c8ca59f913e377f1a64a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_8e6f93315d25c8ca59f913e377f1a64a},children)
    )
});

export const Bare_comp_9ca9eb4faa33b88efa030f3447815797_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_
    )
});

export const Bare_comp_7df0a89e68ad54b4640daeb8df9ae757_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" registros en hist\u00f3rico")
    )
});

export const Bare_comp_7fe9b060e28bd5d7fcb602a290c1721b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_
    )
});

export const Cond_comp_8c6e204e5b424cb5bc7abe624f863cd1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_0b5c0ae231cdf3176d716c305bdb8404_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_
    )
});

export const Cond_comp_000f65aa0854ebc23e0b030e4bd9eaa1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_de6a5086bc9db09f25c70c0bd5ee2f9e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_
    )
});

export const Cond_comp_ba9fa6e0ea41846fe4dadd193b72a092_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_67457b913e277d63cf965ddada62cc9c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (" \u00bfRescindir contrato de la "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Foreach_comp_714b4020ad92b833a4f2c9de1b5aa4cd_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_reason_options_rx_state_ ?? [],((option_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:option_rx_state_},option_rx_state_))))
    )
});

export const Bare_comp_9bbcc63c95b03d462d05d1411b163d01_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_
    )
});

export const Cond_comp_d5fef0acd14f1ed48c144db7f5561a74_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_209f1f00bf552466e01a6bfed5c9142b_81e687a6 = memo(({children}) => {
    const on_click_9fdef5b9dd2d12a65cbde87d561a9db2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-100",onClick:on_click_9fdef5b9dd2d12a65cbde87d561a9db2,type:"button"},children)
    )
});

export const Form_form_aa2b19ea2dd4e18575b357f196206450_81e687a6 = memo(({children}) => {
    

    const handleSubmit_36281b85bd2bced3b7edd2fddbaececd = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["termination_date"] : getRefValue(refs["ref_termination_date"]), ["termination_reason"] : getRefValue(refs["ref_termination_reason"]), ["termination_note"] : getRefValue(refs["ref_termination_note"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_terminate", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_36281b85bd2bced3b7edd2fddbaececd},children)
    )
});

export const Cond_comp_972f9dff49904d95e1273590b0d7500d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_termination_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_857c6cd62ecd3f6048a869bf58d11198_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Fecha final actual "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"]+" \u00b7 "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"])
    )
});

export const Bare_comp_8b2ebae38356b13d7fe16b75f00a24e5_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_
    )
});

export const Cond_comp_9071d87e86f380f87086347a02bcb8f9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_30ac20b7950240e1d58a739d54556db1_81e687a6 = memo(({children}) => {
    const on_click_2df2a6882ebd3751eebc69da80f1718e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-violet-200 bg-white px-3 py-2 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100",onClick:on_click_2df2a6882ebd3751eebc69da80f1718e,type:"button"},children)
    )
});

export const Form_form_2ee1abf82fef75e00ca7725527e31acb_81e687a6 = memo(({children}) => {
    

    const handleSubmit_ad29d337d3e5880b565633c7395082b7 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.extend_contract", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_ad29d337d3e5880b565633c7395082b7},children)
    )
});

export const Cond_comp_c085612898e3652a293ef21fc48dfb62_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_extension_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_7b11bb4da1355a93432f34e339c84e21_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("\u00bfBorrar "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Button_button_a7ebd04b57ee9fcf1fccba782a793028_81e687a6 = memo(({children}) => {
    const on_click_923c099ae321f0988a4ffdb6e140efd0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700",onClick:on_click_923c099ae321f0988a4ffdb6e140efd0},children)
    )
});

export const Button_button_6ad0fde1b76b8112ae02e811c35e4807_81e687a6 = memo(({children}) => {
    const on_click_a7813bde8bc1ec6a27208bace363229e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50",onClick:on_click_a7813bde8bc1ec6a27208bace363229e},children)
    )
});

export const Cond_comp_c458173db17eef64042f61dbfe9789c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_delete_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_b3ce4c773c9cf136341a0a493e2ef5c4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_title_rx_state_
    )
});

export const Bare_comp_153af82c2b8b89a152180352ae02cdcb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_subtitle_rx_state_
    )
});

export const Button_button_4d0842658377d944d5329f50637538a9_81e687a6 = memo(({children}) => {
    const on_click_99c3d14f1beb30748470d7f7025e0150 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close record form",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_99c3d14f1beb30748470d7f7025e0150,type:"button"},children)
    )
});

export const Button_button_bf074ec47678bbb2c060809e4acf51ea_81e687a6 = memo(({children}) => {
    const on_click_fc8b27285380aa027e2a5ed72e80b0de = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"text-xs font-semibold text-violet-600 hover:text-violet-700",onClick:on_click_fc8b27285380aa027e2a5ed72e80b0de,type:"button"},children)
    )
});

export const Bare_comp_16fba8eb44287c1c6a91b06bbd254fd2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["room"]
    )
});

export const Bare_comp_4ef6caec198040f3356d4d5a9c9419f8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((((("Piso "+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["floor"])+" \u00b7 ")+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["bed_type"])+" \u00b7 ")+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["status"])
    )
});

export const Cond_comp_a752acdfef50db28236478b12143fdef_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_f4a874925091a2b602d932060fda7c56_81e687a6 = memo(({children}) => {
    const on_click_ad600ecf23eb793d7af1e9c5587afafd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"text-xs font-semibold text-violet-600 hover:text-violet-700",onClick:on_click_ad600ecf23eb793d7af1e9c5587afafd,type:"button"},children)
    )
});

export const Bare_comp_3ca10c306cc2cdcb8d7de2b8e1a119c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant"]
    )
});

export const Bare_comp_fb6b2bc9c2f8b5f0b8625421f5a42cdd_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_dni"]+" \u00b7 ")+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_email"])+" \u00b7 ")+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_phone"])
    )
});

export const Cond_comp_c266f1a8bcfb6f11434457022349c898_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_75dd6ec0663a795d4c140512b24a9f24_81e687a6 = memo(({children}) => {
    const ref_record_lease_start = useRef(null); refs["ref_record_lease_start"] = ref_record_lease_start;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_start"],id:"record-lease_start",key:("lease_start-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_start",placeholder:"",ref:ref_record_lease_start,type:"date"},)
    )
});

export const Bare_comp_37a176258d048b6a9cd2bbf0dc1a5da3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]
    )
});

export const Cond_comp_ffa949cf296a2e82cc057af62d31969e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_aab169d4e6744f00d9a1a7bc476885d9_81e687a6 = memo(({children}) => {
    const ref_record_lease_end = useRef(null); refs["ref_record_lease_end"] = ref_record_lease_end;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_end"],id:"record-lease_end",key:("lease_end-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_end",placeholder:"",ref:ref_record_lease_end,type:"date"},)
    )
});

export const Bare_comp_91558afac4c241dd6531578bbdfa38c1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]
    )
});

export const Cond_comp_08ae251919a4a91df2246685ed1d3bfc_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_a4ee469dc6c3890fb5fa56a48b96c2c2_81e687a6 = memo(({children}) => {
    const ref_record_next_payment = useRef(null); refs["ref_record_next_payment"] = ref_record_next_payment;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["next_payment"],id:"record-next_payment",key:("next_payment-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"next_payment",placeholder:"",ref:ref_record_next_payment,type:"date"},)
    )
});

export const Bare_comp_717683986b93c45a782e874cd608d6f3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]
    )
});

export const Cond_comp_61e85ab7995511108b2aa768c49dfc73_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["next_payment"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_e8c27c0358b84ca8cb23e9e60ca86775_81e687a6 = memo(({children}) => {
    const ref_record_rent = useRef(null); refs["ref_record_rent"] = ref_record_rent;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["rent"],id:"record-rent",key:("rent-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"rent",placeholder:"400",ref:ref_record_rent,type:"number"},)
    )
});

export const Bare_comp_c2c5661e24d09ffbbe81ecd357bca06a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]
    )
});

export const Cond_comp_9f87048c5c4c90aa4db2b3dc7615c2a2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_8bbd67b1ce695090e3ca2d5c93ef79b2_81e687a6 = memo(({children}) => {
    const ref_record_deposit = useRef(null); refs["ref_record_deposit"] = ref_record_deposit;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["deposit"],id:"record-deposit",key:("deposit-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"deposit",placeholder:"400",ref:ref_record_deposit,type:"number"},)
    )
});

export const Bare_comp_c15d22c7cad4436e5f18f376531edbc6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]
    )
});

export const Cond_comp_032faf46bca28225cced18ec95c557e6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_e0415daa777314a95240670eab1ea9b6_81e687a6 = memo(({children}) => {
    const ref_record_balance = useRef(null); refs["ref_record_balance"] = ref_record_balance;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["balance"],id:"record-balance",key:("balance-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"balance",placeholder:"0",ref:ref_record_balance,type:"number"},)
    )
});

export const Bare_comp_450d821cc4dae0e08af649225aa4c81b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]
    )
});

export const Cond_comp_b605f8dd1e6d0b364c2279d63fea1eda_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["balance"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_c852216104ad15456e594657de6e7e40_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.payment_status_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_606a6bce8d589569e06193cf7d8c661d_81e687a6 = memo(({children}) => {
    const ref_record_payment_status = useRef(null); refs["ref_record_payment_status"] = ref_record_payment_status;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["payment_status"],id:"record-payment_status",key:("payment_status-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"payment_status",ref:ref_record_payment_status},children)
    )
});

export const Bare_comp_16d65d58ac2a3fdac7e51b6b31ad9d45_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["payment_status"]
    )
});

export const Cond_comp_1c0f6132a5be3221e44385f820ec3e17_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["payment_status"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_c3c0375a698e4a5163ebb6c5eae2d05f_81e687a6 = memo(({children}) => {
    const ref_record_last_payment = useRef(null); refs["ref_record_last_payment"] = ref_record_last_payment;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["last_payment"],id:"record-last_payment",key:("last_payment-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"last_payment",placeholder:"",ref:ref_record_last_payment,type:"date"},)
    )
});

export const Bare_comp_563785c7f357a4db970d0af9488570d2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]
    )
});

export const Cond_comp_6aaf821be3e14b2d73acb7604ecf370f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["last_payment"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Textarea_textarea_2c4e4314ea016f76cffe5a19663ea498_81e687a6 = memo(({children}) => {
    const ref_record_notes = useRef(null); refs["ref_record_notes"] = ref_record_notes;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("textarea",{className:"mt-2 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["notes"],id:"record-notes",key:("notes-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"notes",placeholder:"Access instructions, maintenance preferences, roommate arrangements...",ref:ref_record_notes,rows:"3"},)
    )
});

export const Bare_comp_c9e5275dbec1d506dc67a2fc6ce8a3c5_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_
    )
});

export const Cond_comp_6a3a88422800265d3b3ff5410f4e7c53_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_6ed8b730f054dec68d012aa8e73e08bd_81e687a6 = memo(({children}) => {
    const on_click_99c3d14f1beb30748470d7f7025e0150 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50",onClick:on_click_99c3d14f1beb30748470d7f7025e0150,type:"button"},children)
    )
});

export const Bare_comp_2310ecf8377f2dc08ad04ee9f1bc0c46_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.submit_label_rx_state_
    )
});

export const Form_form_c4aa988148c0382be5fad2343cebdbe2_81e687a6 = memo(({children}) => {
    

    const handleSubmit_83a4820dbbd56d05dfe1b0da9756875e = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["record_lease_start"] : getRefValue(refs["ref_record_lease_start"]), ["record_lease_end"] : getRefValue(refs["ref_record_lease_end"]), ["record_next_payment"] : getRefValue(refs["ref_record_next_payment"]), ["record_rent"] : getRefValue(refs["ref_record_rent"]), ["record_deposit"] : getRefValue(refs["ref_record_deposit"]), ["record_balance"] : getRefValue(refs["ref_record_balance"]), ["record_payment_status"] : getRefValue(refs["ref_record_payment_status"]), ["record_last_payment"] : getRefValue(refs["ref_record_last_payment"]), ["record_notes"] : getRefValue(refs["ref_record_notes"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.submit_record", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"flex w-full flex-col",onSubmit:handleSubmit_83a4820dbbd56d05dfe1b0da9756875e},children)
    )
});

export const Button_button_d7897c9e99bc4c23275831a8cb2b8bfb_81e687a6 = memo(({children}) => {
    const on_click_c942e96af1b0fea048a2d0cc506d49e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",onClick:on_click_c942e96af1b0fea048a2d0cc506d49e7,type:"button"},children)
    )
});

export const Foreach_comp_4c3eb440da241aca17e84340fe78296a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_available_rx_state_ ?? [],((r_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:r_rx_state_?.["id"]},r_rx_state_?.["room"]))))
    )
});

export const Select_select_094ee8f86ce655a53797744580517415_81e687a6 = memo(({children}) => {
    const on_change_1cea3caa9ec7b164c5287068c6563312 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-hidden",onChange:on_change_1cea3caa9ec7b164c5287068c6563312,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_selected_id_rx_state_},children)
    )
});

export const Input_input_11c7c4fdd289b38aea7a095e1ccf219e_81e687a6 = memo(({children}) => {
    const on_change_caebf6823c9ae156ceef0878551dc6e5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_room", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_room_rx_state_,onChange:on_change_caebf6823c9ae156ceef0878551dc6e5},)
    )
});

export const Valuenumberinput_input_96c76489afcad1182c13e6e847a892be_81e687a6 = memo(({children}) => {
    const on_change_4aef2ddbfca86c1bda8af2bab08fb749 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_floor", ({ ["value"] : (Number(_e?.["target"]?.["value"])) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_floor_rx_state_,onChange:on_change_4aef2ddbfca86c1bda8af2bab08fb749,type:"number"},)
    )
});

export const Foreach_comp_7cf106cbcd5a442b9f376ad1a50f7f1d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.bed_type_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_ef9d10e735ab07b03364766c6a17b698_81e687a6 = memo(({children}) => {
    const on_change_e22ae0676777ae648238a7a9458eeea2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_bed_type", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_e22ae0676777ae648238a7a9458eeea2,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_bed_type_rx_state_},children)
    )
});

export const Foreach_comp_39d87c7a3805cb2a03f0210d199412ea_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.status_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_755348a5d02a7f78dffcd06cd89c5c14_81e687a6 = memo(({children}) => {
    const on_change_fd2c2c1309b680ae5a1b63846a4cc587 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_status", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_fd2c2c1309b680ae5a1b63846a4cc587,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_status_rx_state_},children)
    )
});

export const Cond_comp_43840b03af0eecb7a7f620c10171cc09_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_selected_id_rx_state_?.valueOf?.() === ""?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_cbb11abe457d3454b5150ed824d25cda_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_error_rx_state_
    )
});

export const Cond_comp_70befe5e25761bb35ed1fad8ffb1841a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_917773fddc777e44506df2b206403505_81e687a6 = memo(({children}) => {
    const on_click_c942e96af1b0fea048a2d0cc506d49e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50",onClick:on_click_c942e96af1b0fea048a2d0cc506d49e7,type:"button"},children)
    )
});

export const Button_button_ae15215de8d253eddfc9ac277008f62d_81e687a6 = memo(({children}) => {
    const on_click_fdf8c24a18374f1111e62695579437ca = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700",onClick:on_click_fdf8c24a18374f1111e62695579437ca,type:"button"},children)
    )
});

export const Cond_comp_42b6c650a89d7530b82f63a4eac7cece_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_c4f2724797c562d12d788ddf640352d2_81e687a6 = memo(({children}) => {
    const on_click_79ff3fd2fea0412b60b55d09a8da4031 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",onClick:on_click_79ff3fd2fea0412b60b55d09a8da4031,type:"button"},children)
    )
});

export const Foreach_comp_507737798dde20e46cc869730af272e4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_available_rx_state_ ?? [],((t_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:t_rx_state_?.["id"]},t_rx_state_?.["tenant"]))))
    )
});

export const Select_select_f466447536b8451f58f5fc75151bba36_81e687a6 = memo(({children}) => {
    const on_change_2efad739f42a1ae5b2204e4865f56538 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-hidden",onChange:on_change_2efad739f42a1ae5b2204e4865f56538,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_selected_id_rx_state_},children)
    )
});

export const Input_input_f705af773455e172318a940d5e145d30_81e687a6 = memo(({children}) => {
    const on_change_c29c7f2ef488b26ce9a69de9f4124c23 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_tenant", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_tenant_rx_state_,onChange:on_change_c29c7f2ef488b26ce9a69de9f4124c23},)
    )
});

export const Input_input_1f9d2d087efd985303e1b07fa07c8c1f_81e687a6 = memo(({children}) => {
    const on_change_5dac9cd8a34e69a6cc653c9c14468d1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_dni", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_dni_rx_state_,onChange:on_change_5dac9cd8a34e69a6cc653c9c14468d1c},)
    )
});

export const Input_input_db5e61b0215953bd54ecfdb095079a74_81e687a6 = memo(({children}) => {
    const on_change_535497b0d230822a5f57c53c52e1efa1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_email", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_email_rx_state_,onChange:on_change_535497b0d230822a5f57c53c52e1efa1,type:"email"},)
    )
});

export const Input_input_44df1124d966d254a190de4b977fbaf0_81e687a6 = memo(({children}) => {
    const on_change_b9720b653c13794793480da268d417f0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_phone", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_phone_rx_state_,onChange:on_change_b9720b653c13794793480da268d417f0,type:"tel"},)
    )
});

export const Cond_comp_b4026b7b3f429c42f85a304bfb1a64fe_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_selected_id_rx_state_?.valueOf?.() === ""?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_e9a7932111d4ecabb30e0f67d70f11bf_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_error_rx_state_
    )
});

export const Cond_comp_58c2997d82243b685115d3c13b58655a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_e05ea4ca092a3191332b469ab2c04c1b_81e687a6 = memo(({children}) => {
    const on_click_79ff3fd2fea0412b60b55d09a8da4031 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50",onClick:on_click_79ff3fd2fea0412b60b55d09a8da4031,type:"button"},children)
    )
});

export const Button_button_178538fed993053dcd3c40eee294be2d_81e687a6 = memo(({children}) => {
    const on_click_d04aade8032846b5be9e0eb7b12d1605 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700",onClick:on_click_d04aade8032846b5be9e0eb7b12d1605,type:"button"},children)
    )
});

export const Cond_comp_e2d18466e4c5b240dc93d79728646e9b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_1ae030cdb97a67826efea557aa977083_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.is_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_9220ae683917a97659c00d76262e7390_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.result_label_rx_state_
    )
});

export const Button_button_bc0cfe50bfe7c893b357ec891b06611e_81e687a6 = memo(({children}) => {
    const on_click_681a3a56a0b1f92efbc4486f298be561 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.refresh", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50 sm:w-auto",disabled:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_,onClick:on_click_681a3a56a0b1f92efbc4486f298be561},children)
    )
});

export const Foreach_comp_83b71f6a46d3e5cb8b773efbabcab8bf_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_a11d272e345ae0206655af59b2295c9b)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full cursor-pointer flex-col rounded-xl border-2 border-violet-500 bg-white p-5 text-left ring-2 ring-violet-100 transition-colors outline-hidden" : "flex w-full cursor-pointer flex-col rounded-xl border-2 border-gray-200 bg-white p-5 text-left transition-colors hover:border-violet-300 focus-visible:border-violet-500 outline-hidden"),key:index_a11d272e345ae0206655af59b2295c9b,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-start justify-between gap-3"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50"},jsx(LucideBedDouble,{className:"h-5 w-5 text-violet-600"},)),jsx("div",{},jsx("p",{className:"text-base font-semibold tracking-tight text-gray-900"},("Habitaci\u00f3n "+item_rx_state_?.["room"])))),jsx("span",{className:(() => { switch (JSON.stringify(item_rx_state_?.["status"])) {case JSON.stringify("Active"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Ending soon"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},item_rx_state_?.["status"])),jsx("div",{className:"mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3"},jsx("img",{className:"size-9 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+item_rx_state_?.["tenant_email"])},),jsx("div",{className:"min-w-0"},jsx("p",{className:"truncate text-sm font-semibold text-gray-900"},item_rx_state_?.["tenant"]),jsx("p",{className:"truncate text-xs font-medium text-gray-500"},("Tipo de cama "+item_rx_state_?.["bed_type"])))),jsx("div",{className:"mt-4 flex flex-col gap-2.5"},jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarCheck,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"F_inicio")),jsx("span",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["lease_start"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarClock,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"F_fin")),jsx("span",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["lease_end"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideBanknote,{className:"h-4 w-4 text-gray-400"},),jsx("span",{className:"text-sm font-medium text-gray-500"},"Renta mensual")),jsx("span",{className:"text-sm font-semibold text-gray-900"},((item_rx_state_?.["rent"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ","))+"\u20ac")))),jsx("div",{className:"mt-5 flex items-center justify-between border-t border-gray-100 pt-4"},jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-400"},"Ocupada"),jsx("div",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex items-center gap-1.5 text-violet-600" : "flex items-center gap-1.5 text-gray-400")},jsx("span",{className:"text-sm font-semibold"},((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "Viendo inquilino" : "Ver inquilino")),jsx(LucideArrowRight,{className:"h-4 w-4"},)))))))
    )
});

export const Cond_comp_464950705920750f2eab713df4106074_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_bbe45f3a96bce7c4e7d892ceea459bda_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_a7b223538b6abb9cc44489e027c66b1f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "Seleccionado" : "Vac\u00edo")
    )
});

export const Span_span_b8e3aa699408fdcf91fa4c78de7ef302_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "w-fit rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700" : "w-fit rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-500")},children)
    )
});

export const Img_img_c5550150392a6f58a193bf801186d1ba_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 shrink-0 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_65d47f195aa8117b7f28a4555f84a0ed_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_d95e131446c4ca78eddf0229eed8cc44_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Habitaci\u00f3n "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["room"])
    )
});

export const Button_button_5a04a96df4981d1b86ccf4eab1f0aba1_81e687a6 = memo(({children}) => {
    const on_click_dc8aa464642aaba65a95433051075cab = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close tenant details",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",onClick:on_click_dc8aa464642aaba65a95433051075cab},children)
    )
});

export const Bare_comp_6913b3cf748f099d2200ca58e931c090_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"]
    )
});

export const Span_span_91cc5f21899df0f431f84d7ee3818a75_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(() => { switch (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["status"])) {case JSON.stringify("Active"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Ending soon"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},children)
    )
});

export const Bare_comp_10a4dbf046a63b4717a7af781076da66_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"]
    )
});

export const Reactrouterlink_link_f04ec0feae91d7558957317c1240d879_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 transition-colors hover:border-violet-300 hover:text-violet-700",to:("mailto:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},children)
    )
});

export const Bare_comp_e96849fcea656bf036f056fba00ad4c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"]
    )
});

export const Reactrouterlink_link_f99a4f7cff4b813576f1c9fdeaa719a0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 transition-colors hover:border-violet-300 hover:text-violet-700",to:("tel:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"])},children)
    )
});

export const Bare_comp_fd6ca14a8282d3a51a18dc63c8cfbd5c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_start"]
    )
});

export const Bare_comp_4c4ed0ae81349f15ec16685ef2cf8ec0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"]
    )
});

export const Bare_comp_f7c50ae691bf23301ec1cf702793582b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["deposit"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ","))+"\u20ac")
    )
});

export const Bare_comp_cf90898c837b6f25380103d51c388255_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["payment_status"]
    )
});

export const Span_span_7e9edf8b7bd570f80c1b44670bde0dc9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(() => { switch (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["payment_status"])) {case JSON.stringify("Paid"):  return ("w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700");  break;case JSON.stringify("Due"):  return ("w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700");  break;case JSON.stringify("Overdue"):  return ("w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700");  break;default:  return ("w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700");  break;};})()},children)
    )
});

export const Bare_comp_1fe399437f9fa019b8421c804329bc60_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["rent"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(0)).replaceAll(',', ","))+"\u20ac")
    )
});

export const Bare_comp_245f410b6809d904d78d7ff3a18353d7_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("$"+(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["balance"].toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(2)).replaceAll(',', ",")))
    )
});

export const Bare_comp_1d0a9bfe0f5f6bf6be331e1e7cbd03ab_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["last_payment"]
    )
});

export const Bare_comp_cf3608ce146eb51f2aa3c36c1cf3865b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["next_payment"]
    )
});

export const Bare_comp_558a57ece73974fb9a5b073cf5bdb6cb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Contrato prorrogado hasta "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"])
    )
});

export const Bare_comp_19be0c4672e67a82d2ca419460b7f82b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["notes"]
    )
});

export const Bare_comp_0e8ef839bd952340145e0319aede6e71_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" habitaciones ocupadas")
    )
});

export const Cond_comp_8d1710821124dcb16377177e688658ce_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_ed0445275ebc6c7b125384d4ea899d1d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" preserved record(s), hidden from active occupancy.")
    )
});

export const Input_input_d8ed380b76c10050744fae8af84b51a8_81e687a6 = memo(({children}) => {
    const on_change_9df2d193b49192af3c23dd4ff66f65a7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_history_search", ({ ["value"] : _e?.["target"]?.["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_search_rx_state_,onChange:on_change_9df2d193b49192af3c23dd4ff66f65a7,placeholder:"Search room, building, tenant or reason"},)
    )
});

export const Foreach_comp_bb706dba2de061d5559c0a0180ed5e96_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_8460ef3a18abadc765d8c8355785f4f0)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full flex-col rounded-xl border-2 border-violet-500 bg-white p-5 text-left ring-2 ring-violet-100" : "flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 text-left transition-colors hover:border-violet-300"),key:index_8460ef3a18abadc765d8c8355785f4f0,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_history_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50"},jsx(LucideArchive,{className:"h-5 w-5 text-amber-600"},)),jsx("div",{className:"min-w-0 text-left"},jsx("p",{className:"text-base font-semibold text-gray-900"},("Room "+item_rx_state_?.["room"])),jsx("p",{className:"text-sm font-medium text-gray-500"},item_rx_state_?.["tenant"]))),jsx("div",{className:"mt-4 border-t border-gray-100 pt-4"},jsx("span",{className:"w-fit rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700"},"Terminated"),jsx("p",{className:"mt-3 text-left text-xs font-medium text-gray-500"},(item_rx_state_?.["termination_date"]+" \u00b7 "+item_rx_state_?.["termination_reason"])))))))
    )
});

export const Button_button_02675677c635d4644add1ce8e7b188dc_81e687a6 = memo(({children}) => {
    const on_click_5977ef2fed3c4bf171fd5ba24358059c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_history_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close past tenant details",className:"flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",onClick:on_click_5977ef2fed3c4bf171fd5ba24358059c},children)
    )
});

export const Img_img_901efbab507eb6bba9b01bbde8b665cb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 rounded-full bg-gray-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_a0c04b75742403c5c4f84baf7d52a63f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_96d11fb04b682e0965616961c89acae4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Room "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["room"])
    )
});

export const Bare_comp_3d5b503f284b439ada9bfdcc8c611452_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Ended "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["termination_date"])
    )
});

export const Bare_comp_b6d66dcd9841e19264bdae099709328c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Reason: "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["termination_reason"])
    )
});

export const Bare_comp_31f2740808e5ea400bce4b039f17bef2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"]
    )
});

export const Bare_comp_5002f64f5f32c65d826b1cba399ec77a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_phone"]
    )
});

export const Bare_comp_c9f2c78b9a11c02a2ee3d50a45025922_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["notes"]
    )
});

export const Cond_comp_e998d1656abd6fc22e3f1373079a80de_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_baea3d9881e328da7221c2a3c03c3e5e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_f6e1e1bec53c002f149334f079d78676_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_
    )
});

export const Cond_comp_7120152bb4890f0bcc20ef1a27c9f4f9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_89617c344d6c69b1d94f81494345e92a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.admin_users_rx_state_ ?? [],((item_rx_state_,index_99ae251a64739767aa046e7a9f5f9757)=>(jsx("tr",{className:"border-t border-gray-100 hover:bg-gray-50/70",key:index_99ae251a64739767aa046e7a9f5f9757},jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("div",{className:"min-w-48"},jsx("p",{className:"text-sm font-semibold text-gray-900"},item_rx_state_?.["name"]),jsx("p",{className:"mt-0.5 text-xs font-medium text-gray-500"},item_rx_state_?.["email"]),jsx(Fragment,{},((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.())?(jsx(Fragment,{},jsx("span",{className:"mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-700"},"Usuario actual"))):(jsx(Fragment,{},jsx("div",{},))))))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:"text-sm font-medium text-gray-700"},item_rx_state_?.["role"])),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:(item_rx_state_?.["active"] ? "w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700" : "w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600")},(item_rx_state_?.["active"] ? "Activado" : "Desactivado"))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("button",{className:"flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50",disabled:(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.()),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.toggle_user_access", ({ ["email"] : item_rx_state_?.["email"] }), ({  })))], [_e], ({  }))))},jsx(DynamicIcon,{className:"h-4 w-4",name:(item_rx_state_?.["active"] ? "user-round-x" : "user-round-check").replaceAll("_", "-")},),jsx("span",{},(item_rx_state_?.["active"] ? "Desactivar" : "Activar"))))))))
    )
});

export const Bare_comp_0db4714ce3a440e5511a91895c026e1e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_
    )
});

export const Cond_comp_85687956fd7157ca2bf2e066e615601b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_0aaa6b3cd3f79c0df3c9667972385bdb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_
    )
});

export const Cond_comp_26a9f32daaf442ff2c29c0afe686d3f8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_1384a97f8e91be6fcb271b66c0060672_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_
    )
});

export const Cond_comp_c6e06d21f430415c39b51c16f2937b77_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_bd8bb36a33f9d2a17ba15f6469fc0c89_81e687a6 = memo(({children}) => {
    

    const handleSubmit_a56ef72088b8556c9517b57b76041bfb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.sign_in", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-6 flex flex-col gap-4",onSubmit:handleSubmit_a56ef72088b8556c9517b57b76041bfb},children)
    )
});

export const Cond_comp_edd7a12f9764e871bb6fa2847e59ea24_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.is_authenticated_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
