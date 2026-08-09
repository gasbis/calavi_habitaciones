
import {ReflexEvent,applyEventActions,getRefValue,getRefValues,isTrue,refs} from "$/utils/state"
import {StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {jsx} from "@emotion/react"
import LucideArchive from "lucide-react/dist/esm/icons/archive.mjs"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import LucideBedDouble from "lucide-react/dist/esm/icons/bed-double.mjs"
import LucideCalendarClock from "lucide-react/dist/esm/icons/calendar-clock.mjs"
import LucideBanknote from "lucide-react/dist/esm/icons/banknote.mjs"
import LucideCalendarCheck from "lucide-react/dist/esm/icons/calendar-check.mjs"
import LucideArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs"
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

export const Input_input_9556445f6b25fa7d5e3aae0520057b94_81e687a6 = memo(({children}) => {
    const ref_record_room = useRef(null); refs["ref_record_room"] = ref_record_room;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["room"],id:"record-room",key:("room-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"room",placeholder:"1",ref:ref_record_room,type:"text"},)
    )
});

export const Bare_comp_f738f3f44a7099a20a2d60796e8f8343_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]
    )
});

export const Cond_comp_d7d2a1efbdf568cc369e2f4b543b45b6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["room"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_65832d292ee3ebac5e050dba56d88c41_81e687a6 = memo(({children}) => {
    const ref_record_floor = useRef(null); refs["ref_record_floor"] = ref_record_floor;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["floor"],id:"record-floor",key:("floor-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"floor",placeholder:"0",ref:ref_record_floor,type:"text"},)
    )
});

export const Bare_comp_9acc832c649a621b5f8519c9ad2e98ae_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]
    )
});

export const Cond_comp_d22a3698049a9d6cc5e228539cf643e5_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["floor"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_7cf106cbcd5a442b9f376ad1a50f7f1d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.bed_type_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_8bd024d04cc3a56c9ee37fb82785eeef_81e687a6 = memo(({children}) => {
    const ref_record_bed_type = useRef(null); refs["ref_record_bed_type"] = ref_record_bed_type;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["bed_type"],id:"record-bed_type",key:("bed_type-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"bed_type",ref:ref_record_bed_type},children)
    )
});

export const Bare_comp_b188cf4d4024576eff458f2c8313fde8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["bed_type"]
    )
});

export const Cond_comp_e61dea95a48d7a1ff06c686891016ee4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["bed_type"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_39d87c7a3805cb2a03f0210d199412ea_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.status_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_61cf515dbc04b3627a359c9556f8bd92_81e687a6 = memo(({children}) => {
    const ref_record_status = useRef(null); refs["ref_record_status"] = ref_record_status;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["status"],id:"record-status",key:("status-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"status",ref:ref_record_status},children)
    )
});

export const Bare_comp_9f3091ec292e1c122fd2e311cd53c309_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["status"]
    )
});

export const Cond_comp_29f83eaa3c4bc5d739092b8faf72c138_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["status"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_5d95fa157c3452295aba5703c375c0cd_81e687a6 = memo(({children}) => {
    const ref_record_tenant = useRef(null); refs["ref_record_tenant"] = ref_record_tenant;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant"],id:"record-tenant",key:("tenant-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant",placeholder:"",ref:ref_record_tenant,type:"text"},)
    )
});

export const Bare_comp_0252816dc085afec2af147f7c525a32d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]
    )
});

export const Cond_comp_e580b125eaa96260e3c2f79a4c5c2087_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_01b83275048e1abdc8fad635cfc9ecbf_81e687a6 = memo(({children}) => {
    const ref_record_tenant_dni = useRef(null); refs["ref_record_tenant_dni"] = ref_record_tenant_dni;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_dni"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant_dni"],id:"record-tenant_dni",key:("tenant_dni-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant_dni",placeholder:"",ref:ref_record_tenant_dni,type:"text"},)
    )
});

export const Bare_comp_d4adb519c383767121e4c7d2c9170897_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_dni"]
    )
});

export const Cond_comp_6e0a15f79abf1229fd6bc7a55f8978e3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_dni"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_b6bcb13ef44184e4bcdf5fc8cb6cfd8e_81e687a6 = memo(({children}) => {
    const ref_record_tenant_email = useRef(null); refs["ref_record_tenant_email"] = ref_record_tenant_email;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant_email"],id:"record-tenant_email",key:("tenant_email-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant_email",placeholder:"",ref:ref_record_tenant_email,type:"email"},)
    )
});

export const Bare_comp_cccf378f988c5b78b7149d2767c2a439_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]
    )
});

export const Cond_comp_b05d934f4338cba78f08b0a5b6468cd0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_email"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_e9119eb5d2496f6cff334ad9741a017a_81e687a6 = memo(({children}) => {
    const ref_record_tenant_phone = useRef(null); refs["ref_record_tenant_phone"] = ref_record_tenant_phone;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden" : "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["tenant_phone"],id:"record-tenant_phone",key:("tenant_phone-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"tenant_phone",placeholder:"",ref:ref_record_tenant_phone,type:"tel"},)
    )
});

export const Bare_comp_9504be792e73c0487ef12a2cd1abbc9f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]
    )
});

export const Cond_comp_3939e8cd5a5ffe0004f9bb08cd6b5c73_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["tenant_phone"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
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

export const Form_form_05e1ccfe407501b2a5ae2dd231264019_81e687a6 = memo(({children}) => {
    

    const handleSubmit_8406d81b17ed3faa7fabce4212b4f5f4 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["record_room"] : getRefValue(refs["ref_record_room"]), ["record_floor"] : getRefValue(refs["ref_record_floor"]), ["record_bed_type"] : getRefValue(refs["ref_record_bed_type"]), ["record_status"] : getRefValue(refs["ref_record_status"]), ["record_tenant"] : getRefValue(refs["ref_record_tenant"]), ["record_tenant_dni"] : getRefValue(refs["ref_record_tenant_dni"]), ["record_tenant_email"] : getRefValue(refs["ref_record_tenant_email"]), ["record_tenant_phone"] : getRefValue(refs["ref_record_tenant_phone"]), ["record_lease_start"] : getRefValue(refs["ref_record_lease_start"]), ["record_lease_end"] : getRefValue(refs["ref_record_lease_end"]), ["record_next_payment"] : getRefValue(refs["ref_record_next_payment"]), ["record_rent"] : getRefValue(refs["ref_record_rent"]), ["record_deposit"] : getRefValue(refs["ref_record_deposit"]), ["record_balance"] : getRefValue(refs["ref_record_balance"]), ["record_payment_status"] : getRefValue(refs["ref_record_payment_status"]), ["record_last_payment"] : getRefValue(refs["ref_record_last_payment"]), ["record_notes"] : getRefValue(refs["ref_record_notes"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.submit_record", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"flex w-full flex-col",onSubmit:handleSubmit_8406d81b17ed3faa7fabce4212b4f5f4},children)
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
