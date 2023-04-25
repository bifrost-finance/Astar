use core::marker::PhantomData;
use ink::env::{DefaultEnvironment, Environment};
use xcm::{latest::Weight, prelude::*};
use xcm_ce_types::{Error, QueryConfig, ValidateSendInput};

/// XCM Chain Extension Interface
pub struct XcmExtension<E: Environment = DefaultEnvironment, const ID: u16 = 10>(PhantomData<E>);

impl<E: Environment, const ID: u16> XcmExtension<E, ID> {
    const fn get_func_id(idx: u16) -> u32 {
        ((ID as u32) << 16) + (idx as u32)
    }

    pub fn prepare_execute(xcm: VersionedXcm<()>) -> Result<Weight, Error> {
        let func_id: u32 = Self::get_func_id(0);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<VersionedXcm<()>>()
            .output::<Weight, false>()
            .handle_error_code::<Error>()
            .call(&(xcm))
    }

    pub fn execute() -> Result<(), Error> {
        let func_id: u32 = Self::get_func_id(1);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<()>()
            .output::<(), false>()
            .handle_error_code::<Error>()
            .call(&())
    }

    pub fn validate_send(input: ValidateSendInput) -> Result<VersionedMultiAssets, Error> {
        let func_id: u32 = Self::get_func_id(2);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<ValidateSendInput>()
            .output::<VersionedMultiAssets, false>()
            .handle_error_code::<Error>()
            .call(&(input))
    }

    pub fn send() -> Result<(), Error> {
        let func_id: u32 = Self::get_func_id(3);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<()>()
            .output::<(), false>()
            .handle_error_code::<Error>()
            .call(&())
    }

    pub fn new_query(
        config: QueryConfig<E::AccountId, E::BlockNumber>,
        dest: VersionedMultiLocation,
    ) -> Result<QueryId, Error> {
        let func_id: u32 = Self::get_func_id(4);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<(
                QueryConfig<E::AccountId, E::BlockNumber>,
                VersionedMultiLocation,
            )>()
            .output::<QueryId, false>()
            .handle_error_code::<Error>()
            .call(&(config, dest))
    }

    pub fn take_response(query_id: QueryId) -> Result<Response, Error> {
        let func_id: u32 = Self::get_func_id(5);
        ::ink::env::chain_extension::ChainExtensionMethod::build(func_id)
            .input::<QueryId>()
            .output::<Response, false>()
            .handle_error_code::<Error>()
            .call(&(query_id))
    }
}