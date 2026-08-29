import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": {"scheme": "", "netloc": "", "origin": "://", "path": "", "query": "", "query_parameters": {}, "fragment": "", "href": ""}, "route_id": ""}}, "reflex___state____state.calavi_habitaciones___components___header____menu_state": {"mobile_menu_open_rx_state_": false}, "reflex___state____state.calavi_habitaciones___states___account_state____account_state": {"account_filtered_search_rx_state_": [], "account_search_rx_state_": "", "chapter_rx_state_": "", "chapter_options_rx_state_": [], "delete_error_rx_state_": "", "delete_target_id_rx_state_": "", "dialog_title_rx_state_": "Nuevo movimiento", "editing_id_rx_state_": "", "entries_rx_state_": [], "errors_rx_state_": {"mov_type": "", "mov_date": "", "concept": "", "chapter": "", "subchapter": "", "amount": "", "consum": "", "observ": ""}, "form_error_rx_state_": "", "form_key_rx_state_": 0, "form_values_rx_state_": {"mov_type": "", "mov_date": "", "concept": "", "chapter": "", "subchapter": "", "amount": "", "consum": "", "observ": ""}, "is_open_rx_state_": false, "mode_rx_state_": "create", "move_type_rx_state_": "", "move_type_options_rx_state_": ["Ingreso", "Gasto"], "notice_rx_state_": "", "show_consum_rx_state_": false, "sorted_entries_rx_state_": [], "subchapter_rx_state_": "", "subchapter_options_rx_state_": [], "submit_label_rx_state_": "Alta"}, "reflex___state____state.calavi_habitaciones___states___auth_state____auth_state": {"admin_users_rx_state_": [], "auth_error_rx_state_": "", "change_password_current_error_rx_state_": "", "change_password_error_rx_state_": "", "change_password_new_error_rx_state_": "", "change_password_notice_rx_state_": "", "change_password_open_rx_state_": false, "current_user_rx_state_": {"email": "", "name": "", "role": ""}, "email_error_rx_state_": "", "is_authenticated_rx_state_": false, "management_notice_rx_state_": "", "new_admin_email_error_rx_state_": "", "new_admin_error_rx_state_": "", "new_admin_open_rx_state_": false, "new_admin_password_error_rx_state_": "", "password_error_rx_state_": ""}, "reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state": {"all_rooms_rx_state_": [], "attention_count_rx_state_": 0, "business_days_elapsed_rx_state_": 1, "filtered_rooms_rx_state_": [], "has_selection_rx_state_": false, "history_filtered_rooms_rx_state_": [], "history_search_rx_state_": "", "history_selected_id_rx_state_": "", "is_loading_rx_state_": false, "monthly_revenue_rx_state_": 0.0, "monthly_revenue_display_rx_state_": "0€", "occupancy_rate_rx_state_": 0.0, "occupied_count_rx_state_": 0, "occupied_lease_rx_state_": [], "rent_paid_current_month_rx_state_": false, "result_label_rx_state_": "0 habitaciones listadas", "room_occupancy_days_total_rx_state_": {}, "room_occupancy_days_year_rx_state_": {}, "rooms_rx_state_": [], "rooms_occupancy_panel_rx_state_": [], "selected_history_room_rx_state_": {"id": "", "room_id": "", "tenant_id": "", "room": "", "floor": 0, "bed_type": "", "tenant": "", "tenant_dni": "", "tenant_email": "", "tenant_phone": "", "rent": 0.0, "deposit": 0.0, "lease_start": "", "lease_end": "", "notes": "", "record_status": "Activo", "termination_date": "", "rent_display": "0€", "deposit_display": "0€"}, "selected_id_rx_state_": "", "selected_room_rx_state_": {"id": "", "room_id": "", "tenant_id": "", "room": "", "floor": 0, "bed_type": "", "tenant": "", "tenant_dni": "", "tenant_email": "", "tenant_phone": "", "rent": 0.0, "deposit": 0.0, "lease_start": "", "lease_end": "", "notes": "", "record_status": "Activo", "termination_date": "", "rent_display": "0€", "deposit_display": "0€"}, "selected_room_chapter_rx_state_": "", "selected_room_label_rx_state_": "Ninguna habit. seleccionada", "selected_room_lease_end_iso_rx_state_": "", "terminated_count_rx_state_": 0, "terminated_lease_rx_state_": [], "total_units_rx_state_": 7, "view_mode_rx_state_": "active"}, "reflex___state____state.calavi_habitaciones___states___record_state____record_state": {"bed_type_options_rx_state_": ["2,00x0,90x0,18", "1.35", "1.50"], "change_room_error_rx_state_": "", "change_room_notice_rx_state_": "", "change_room_target_id_rx_state_": "", "delete_target_id_rx_state_": "", "dialog_subtitle_rx_state_": "Crear un nuevo registro de contrato de alquiler.", "dialog_title_rx_state_": "Alta de contrato", "editing_id_rx_state_": "", "errors_rx_state_": {"rent": "", "deposit": "", "lease_start": "", "lease_end": "", "notes": ""}, "extension_end_date_rx_state_": "", "extension_error_rx_state_": "", "extension_notice_rx_state_": "", "extension_target_id_rx_state_": "", "form_error_rx_state_": "", "form_key_rx_state_": 0, "form_values_rx_state_": {"rent": "", "deposit": "", "lease_start": "", "lease_end": "", "notes": ""}, "has_change_room_target_rx_state_": false, "has_delete_target_rx_state_": false, "has_extension_target_rx_state_": false, "has_notes_target_rx_state_": false, "has_termination_target_rx_state_": false, "is_open_rx_state_": false, "lease_end_key_rx_state_": 0, "mode_rx_state_": "create", "notes_error_rx_state_": "", "notes_notice_rx_state_": "", "notes_target_id_rx_state_": "", "notice_rx_state_": "", "room_available_rx_state_": [], "room_subform_bed_type_rx_state_": "2,00x0,90x0,18", "room_subform_error_rx_state_": "", "room_subform_floor_rx_state_": "1", "room_subform_open_rx_state_": false, "room_subform_room_rx_state_": "", "room_subform_selected_id_rx_state_": "", "selected_room_rx_state_": {}, "selected_room_id_rx_state_": "", "selected_tenant_rx_state_": {}, "selected_tenant_id_rx_state_": "", "submit_label_rx_state_": "Crear registro", "tenant_available_rx_state_": [], "tenant_subform_dni_rx_state_": "", "tenant_subform_email_rx_state_": "", "tenant_subform_error_rx_state_": "", "tenant_subform_open_rx_state_": false, "tenant_subform_phone_rx_state_": "", "tenant_subform_selected_id_rx_state_": "", "tenant_subform_tenant_rx_state_": "", "termination_date_default_rx_state_": "", "termination_error_rx_state_": "", "termination_notice_rx_state_": "", "termination_target_id_rx_state_": ""}, "reflex___state____state.reflex___istate___shared____shared_state_base_internal": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext({
  colorMode: defaultColorMode,
  resolvedColorMode: defaultColorMode === "dark" ? "dark" : "light",
  toggleColorMode: () => {},
  setColorMode: () => {},
});
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__calavi_habitaciones___components___header____menu_state: createContext(null),reflex___state____state__calavi_habitaciones___states___account_state____account_state: createContext(null),reflex___state____state__calavi_habitaciones___states___auth_state____auth_state: createContext(null),reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state: createContext(null),reflex___state____state__calavi_habitaciones___states___record_state____record_state: createContext(null),reflex___state____state__reflex___istate___shared____shared_state_base_internal: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

// Module-level event dispatchers populated by ``EventLoopProvider`` on each
// render. Components reach addEvents/connectErrors via this import instead of
// hoisting ``useContext(EventLoopContext)`` so JSX literals (e.g.
// ``ErrorBoundary.onError``) constructed in any JS scope can dispatch events
// without depending on lexical hook hoisting.
let _addEventsImpl = (events, args, event_actions) => {
  console.warn("addEvents called before EventLoopProvider mounted", events);
};
let _connectErrorsImpl = [];

export function addEvents(events, args, event_actions) {
  return _addEventsImpl(events, args, event_actions);
}

export function getConnectErrors() {
  return _connectErrorsImpl;
}

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      async function load() {
        const comp = await component();
        setComponent(() => comp);
      }
      load();
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEventsLocal, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  // Populate the module-level dispatchers so JSX literals constructed
  // outside the React-tree path (e.g. ``ErrorBoundary.onError``) can call
  // ``addEvents`` without needing the events hook hoisted in their scope.
  _addEventsImpl = addEventsLocal;
  _connectErrorsImpl = connectErrors;
  return createElement(
    EventLoopContext.Provider,
    { value: [addEventsLocal, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__calavi_habitaciones___components___header____menu_state, dispatch_reflex___state____state__calavi_habitaciones___components___header____menu_state] = useReducer(applyDelta, initialState["reflex___state____state.calavi_habitaciones___components___header____menu_state"])
const [reflex___state____state__calavi_habitaciones___states___account_state____account_state, dispatch_reflex___state____state__calavi_habitaciones___states___account_state____account_state] = useReducer(applyDelta, initialState["reflex___state____state.calavi_habitaciones___states___account_state____account_state"])
const [reflex___state____state__calavi_habitaciones___states___auth_state____auth_state, dispatch_reflex___state____state__calavi_habitaciones___states___auth_state____auth_state] = useReducer(applyDelta, initialState["reflex___state____state.calavi_habitaciones___states___auth_state____auth_state"])
const [reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state, dispatch_reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state] = useReducer(applyDelta, initialState["reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state"])
const [reflex___state____state__calavi_habitaciones___states___record_state____record_state, dispatch_reflex___state____state__calavi_habitaciones___states___record_state____record_state] = useReducer(applyDelta, initialState["reflex___state____state.calavi_habitaciones___states___record_state____record_state"])
const [reflex___state____state__reflex___istate___shared____shared_state_base_internal, dispatch_reflex___state____state__reflex___istate___shared____shared_state_base_internal] = useReducer(applyDelta, initialState["reflex___state____state.reflex___istate___shared____shared_state_base_internal"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.calavi_habitaciones___components___header____menu_state": dispatch_reflex___state____state__calavi_habitaciones___components___header____menu_state,
"reflex___state____state.calavi_habitaciones___states___account_state____account_state": dispatch_reflex___state____state__calavi_habitaciones___states___account_state____account_state,
"reflex___state____state.calavi_habitaciones___states___auth_state____auth_state": dispatch_reflex___state____state__calavi_habitaciones___states___auth_state____auth_state,
"reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state": dispatch_reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state,
"reflex___state____state.calavi_habitaciones___states___record_state____record_state": dispatch_reflex___state____state__calavi_habitaciones___states___record_state____record_state,
"reflex___state____state.reflex___istate___shared____shared_state_base_internal": dispatch_reflex___state____state__reflex___istate___shared____shared_state_base_internal,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__calavi_habitaciones___components___header____menu_state,{value: reflex___state____state__calavi_habitaciones___components___header____menu_state},
createElement(StateContexts.reflex___state____state__calavi_habitaciones___states___account_state____account_state,{value: reflex___state____state__calavi_habitaciones___states___account_state____account_state},
createElement(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state,{value: reflex___state____state__calavi_habitaciones___states___auth_state____auth_state},
createElement(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state,{value: reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state},
createElement(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state,{value: reflex___state____state__calavi_habitaciones___states___record_state____record_state},
createElement(StateContexts.reflex___state____state__reflex___istate___shared____shared_state_base_internal,{value: reflex___state____state__reflex___istate___shared____shared_state_base_internal},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    ))))))))))
  )
}